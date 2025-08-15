var plansData = [];

var usersData = [];


var deletedProjects = [
];

let htmlEditor, cssEditor, jsEditor;
var currentUser = null;
var currentProjectId = null;
var currentProject = null;

const getDeletedProjects = async () => {
  const requestOptionGet = {
    method : 'GET'
  }

  const deletedProjectsFromServer = await fetch('http://localhost:3000/users/projects/deleted', requestOptionGet);
  deletedProjects = await deletedProjectsFromServer.json();
  console.log("Proyectos eliminados", deletedProjects);
}

getDeletedProjects();

const getPlansFromBackend = async () =>{

  const requestOptionGet = {
    method : 'GET'
  }
  const plans = await fetch('http://localhost:3000/plans', requestOptionGet);
  plansData = await plans.json();
  console.log("Planes server", plansData);
  renderPlans();
}

getPlansFromBackend();

const getUserFromBackend = async () =>{
  const requestOptionGet = {
    method : 'GET',
  }

  const usersFromServer = await fetch('http://localhost:3000/users', requestOptionGet);
  usersData = await usersFromServer.json();
  console.log("Usuarios server", usersData);

}

getUserFromBackend();

const getCategoryCount = (user, categoryName) => {
  const projects = user.dashboard[0].projects;

  switch(categoryName) {
    case "Mis archivos":
      return projects.length;
    case "Favoritos":
      return projects.filter(p => p.isFavorite).length;
    case "Compartidos":
      return projects.filter(p => p.isShared).length;
    case "Recientes":
      return projects.filter(p => p.isRecent).length;
    case "Papelera":
      return deletedProjects.filter(p => p.isDeleted).length;
    default:
      return 0;
  }
};

const getStorageUsed = (user) => {
  return user.dashboard[0].projects.length;
};

const validateLogin = async () => {
    
    hideAllErrors();

    const email = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const emailRegex = validations.email;
    const passwordRegex = validations.password;

    let hasErrors = false;

    if (!email.trim()) {
        showFieldError('mail', 'El correo electrónico es obligatorio');
        hasErrors = true;
    } else if (!emailRegex.test(email)) {
        showFieldError('mail', 'Formato de correo electrónico inválido');
        hasErrors = true;
    }


    if (!password.trim()) {
        showFieldError('password', 'La contraseña es obligatoria');
        hasErrors = true;
    } else if (!passwordRegex.test(password)) {
        showFieldError('password', 'La contraseña debe tener al menos 8 caracteres, incluir letras y números');
        hasErrors = true;
    }


    if (hasErrors) {
        return;
    }

    const requestOptionPost = {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    const validate = await fetch ('http://localhost:3000/auth/login', requestOptionPost);

    if (validate.ok) {
        const user = await validate.json();
        currentUser = user;
        renderDashboard(currentUser);
        closeFormLogin();
        showUserStorage();
    } else { 
        showFieldError('mail', 'Email o contraseña incorrectos');
        showFieldError('password', 'Email o contraseña incorrectos');
    }
}

const validateRegister = async () => {
    hideAllErrors();

    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-mail").value;
    const phone = document.getElementById("register-phone").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    const nameRegex = validations.name;
    const emailRegex = validations.email;
    const phoneRegex = validations.phone;
    const passwordRegex = validations.password;

    let hasErrors = false;


    if (!name.trim()) {
        showFieldError('register-name', 'El nombre completo es obligatorio');
        hasErrors = true;
    } else if (!nameRegex.test(name)) {
        showFieldError('register-name', 'El nombre solo debe contener letras y espacios');
        hasErrors = true;
    }


    if (!email.trim()) {
        showFieldError('register-mail', 'El correo electrónico es obligatorio');
        hasErrors = true;
    } else if (!emailRegex.test(email)) {
        showFieldError('register-mail', 'Formato de correo electrónico inválido');
        hasErrors = true;
    } else {
        const existingUser = usersData.find(u => u.email === email);
        if (existingUser) {
            showFieldError('register-mail', 'Este correo electrónico ya está registrado');
            hasErrors = true;
        }
    }


    if (!phone.trim()) {
        showFieldError('register-phone', 'El número de teléfono es obligatorio');
        hasErrors = true;
    } else if (!phoneRegex.test(phone)) {
        showFieldError('register-phone', 'Formato de teléfono inválido (ej: +504 1234-5678)');
        hasErrors = true;
    }


    if (!password.trim()) {
        showFieldError('register-password', 'La contraseña es obligatoria');
        hasErrors = true;
    } else if (!passwordRegex.test(password)) {
        showFieldError('register-password', 'La contraseña debe tener al menos 8 caracteres, incluir letras y números');
        hasErrors = true;
    }


    if (!confirmPassword.trim()) {
        showFieldError('register-confirm-password', 'Debes confirmar tu contraseña');
        hasErrors = true;
    } else if (password !== confirmPassword) {
        showFieldError('register-confirm-password', 'Las contraseñas no coinciden');
        hasErrors = true;
    }

    if (hasErrors) {
        return;
    }

    const requestOptionPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        email,
        password,
        name,
        phone
      })
    }
    const response = await fetch('http://localhost:3000/auth/register', requestOptionPost);
    if (response.ok) {
        const user = await response.json();
        currentUser = user;
        getUserFromBackend();
        renderDashboard(currentUser);
        closeFormRegister();
        showUserStorage();
    }

}

const validateFormPayment = () => {
  hideAllErrors();

  const numberCard =document.getElementById("numero-de-tarjeta").value;
  const fullName = document.getElementById("nombre-titular").value;
  const expirationDate = document.getElementById("fecha-vencimiento").value;
  const correoPago = document.getElementById("correo-pago").value;
  const cvv = document.getElementById("CVV").value;
  const numberCardRegex = validations.creditCard;
  const fullNameRegex = validations.name;
  const expirationDateRegex = validations.expirationDate;
  const cvvRegex = validations.cvv;

  let hasErrors = false;

  if(!numberCard.trim()){
    showFieldError('numero-de-tarjeta', 'El número de tarjeta es obligatorio');
    hasErrors = true;
  }else if(!numberCardRegex.test(numberCard)){
    showFieldError('numero-de-tarjeta', 'Formato de número de tarjeta inválido');
    hasErrors = true;
  }

  if(!fullName.trim()){
    showFieldError('nombre-titular', 'El nombre del titular es obligatorio');
    hasErrors = true;
  }else if(!fullNameRegex.test(fullName)){
    showFieldError('nombre-titular', 'El nombre solo debe contener letras y espacios');
    hasErrors = true;
  }

  if(!expirationDate.trim()){
    showFieldError('fecha-vencimiento', 'La fecha de vencimiento es obligatoria');
    hasErrors = true;
  }else if(!expirationDateRegex.test(expirationDate)){
    showFieldError('fecha-vencimiento', 'Formato de fecha de vencimiento inválido');
    hasErrors = true;
  }

  if(!cvv.trim()){
    showFieldError('CVV', 'El CVV es obligatorio');
    hasErrors = true;
  }else if(!cvvRegex.test(cvv)){
    showFieldError('CVV', 'Formato de CVV inválido');
    hasErrors = true;
  }

  if(!correoPago.trim()){
    showFieldError('correo-pago', 'El correo electrónico es obligatorio');
    hasErrors = true;
  }else if(!validations.email.test(correoPago)){
    showFieldError('correo-pago', 'Formato de correo electrónico inválido');
    hasErrors = true;
  }

  if(hasErrors){
    return;
  }


}

const renderPlans = () => {
  const seccionPlans = document.getElementById("seccion-planes");
  let plansHTML = '';
  let plan1 =`<div class="plan" id ="plan${plansData[0].planType}">
                <div class="section-top-plan">
                    <i class="${plansData[0].icons[0]}"></i>
                    <div class="nombre-plan">${plansData[0].planType}</div>
                    <div class="costo-plan">
                        <i class="${plansData[0].icons[1]}"></i>
                        <div>${plansData[0].planPrice}</div>
                        <div class="centavos-mes">
                            <div>00</div>
                            <div class="mes">mes</div>
                        </div>
                    </div>
                </div>
                <div class="descripcion-plan">${plansData[0].title}</div>
                <div class="lista-plan">
                    <div>✔ ${plansData[0].content[0]}</div>
                    <div>✔ ${plansData[0].content[1]}</div>
                    <div>✔ ${plansData[0].content[2]}</div>
                </div>
                <a onclick = "verifyPlan(${plansData[0].id}, '${plansData[0].planType}')" href="#" class="boton-elegir-plan">Elegir Plan</a>
                <div id="p1-error" class="error-message hide">Ya tienes este plan</div>
            </div>
            
            `;
  let plan2 =`<div class="plan" id ="plan${plansData[1].planType}">
                <div class="section-top-plan">
                    <i class="${plansData[1].icons[0]}"></i>
                    <div class="nombre-plan">${plansData[1].planType}</div>
                    <div class="costo-plan">
                        <i class="${plansData[1].icons[1]}"></i>
                        <div>${plansData[1].planPrice}</div>
                        <div class="centavos-mes">
                            <div>00</div>
                            <div class="mes">mes</div>
                        </div>
                    </div>
                </div>
                <div class="descripcion-plan">${plansData[1].title}</div>
                <div class="lista-plan">
                    <div>✔ ${plansData[1].content[0]}</div>
                    <div>✔ ${plansData[1].content[1]}</div>
                    <div>✔ ${plansData[1].content[2]}</div>
                </div>
                <a onclick = "verifyPlan(${plansData[1].id}, '${plansData[1].planType}')" href="#" class="boton-elegir-plan">Elegir Plan</a>
                <div id="p2-error" class="error-message hide">Ya tienes este plan</div>
            </div>`;
  let plan3 =`<div class="plan" id ="plan${plansData[2].planType}">
                <div class="section-top-plan">
                    <i class="${plansData[2].icons[0]}"></i>
                    <div class="nombre-plan">${plansData[2].planType}</div>
                    <div class="costo-plan">
                        <i class="${plansData[2].icons[1]}"></i>
                        <div>${plansData[2].planPrice}</div>
                        <div class="centavos-mes">
                            <div>00</div>
                            <div class="mes">mes</div>
                        </div>
                    </div>
                </div>
                <div class="descripcion-plan">${plansData[2].title}</div>
                <div class="lista-plan">
                    <div>✔ ${plansData[2].content[0]}</div>
                    <div>✔ ${plansData[2].content[1]}</div>
                    <div>✔ ${plansData[2].content[2]}</div>
                </div>
                <a onclick = "verifyPlan(${plansData[2].id},'${plansData[2].planType}')" href="#" class="boton-elegir-plan">Elegir Plan</a>
                <div id="p3-error" class="error-message hide">Ya tienes este plan</div>
            </div>`;
  plansHTML = `${plan1}${plan2}${plan3}`;
    
  seccionPlans.innerHTML = plansHTML;
}

const initializeAceEditors = () =>{
  htmlEditor = ace.edit("htmlCode");
    htmlEditor.setTheme("ace/theme/monokai");
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.setOptions({
        fontSize: "22px",
        showLineNumbers: true,
        showGutter: true,
        wrap: true,
        tabSize: 2,
        useSoftTabs: true
    });
    htmlEditor.resize();

  cssEditor = ace.edit("cssCode");
    cssEditor.setTheme("ace/theme/monokai");
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.setOptions({
        fontSize: "22px",
        showLineNumbers: true,
        showGutter: true,
        wrap: true,
        tabSize: 2,
        useSoftTabs: true
    });
    cssEditor.resize();

  jsEditor = ace.edit("jsCode");
    jsEditor.setTheme("ace/theme/monokai");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setOptions({
        fontSize: "22px",
        showLineNumbers: true,
        showGutter: true,
        wrap: true,
        tabSize: 2,
        useSoftTabs: true
    });
    jsEditor.resize();

    htmlEditor.on('change', () => isSaveFalse());
    cssEditor.on('change', () => isSaveFalse());
    jsEditor.on('change', () => isSaveFalse());
}

const renderCategories = () =>{
  const categories = currentUser.dashboard[0].categories;
   let categoriesHTML = '';

   let categoriesHTML1 = '';
   const dynamicCount = getCategoryCount(currentUser, categories[0].name);
   categoriesHTML1 += `
         <button onclick="showUserStorage()" class=" categoryDashboard mt-5">
           <i style="color: black" class="${categories[0].icon}"></i> ${categories[0].name} (${dynamicCount})
         </button>`;

   let categoriesHTML2 = '';
   const dynamicCount2 = getCategoryCount(currentUser, categories[1].name);
   categoriesHTML2 += `
         <button onclick="renderFavoriteProjects()" class=" categoryDashboard mt-5">
           <i style="color: black" class="${categories[1].icon}"></i> ${categories[1].name} (${dynamicCount2})
         </button>`;

   let categoriesHTML3 = '';
   const dynamicCount3 = getCategoryCount(currentUser, categories[2].name);
   categoriesHTML3 += `
         <button onclick="renderSharedProjects()" class=" categoryDashboard mt-5">
           <i style="color: black" class="${categories[2].icon}"></i> ${categories[2].name} (${dynamicCount3})
         </button>`;

   let categoriesHTML4 = '';
   const dynamicCount4 = getCategoryCount(currentUser, categories[3].name);
   categoriesHTML4 += `
         <button onclick="renderRecentProjects()" class=" categoryDashboard mt-5">
           <i style="color: black" class="${categories[3].icon}"></i> ${categories[3].name} (${dynamicCount4})
         </button>`;

   let categoriesHTML5 = '';
   const dynamicCount5 = getCategoryCount(currentUser, categories[4].name);
   categoriesHTML5 += `
          <button onclick="renderDeletedProjects()" class=" categoryDashboard mt-5">
            <i style="color: black" class="${categories[4].icon}"></i> ${categories[4].name} (${dynamicCount5})
          </button>`;

      categoriesHTML = `
      ${categoriesHTML1}
      ${categoriesHTML2}
      ${categoriesHTML3}
      ${categoriesHTML4}
      ${categoriesHTML5}
    `;
    return categoriesHTML;
}

const renderDeletedProjects =() =>{
   let categoriesHTML = renderCategories();

   const dashboardSection = document.getElementById("dashboard-section");
   dashboardSection.innerHTML = `
     <aside>
       <nav>
         <div class="barral">
           <button onclick="showModalCreateProject()" class="mt-5 bg-yellow-500 mr-23 h-10 w-40 rounded-full text-center flex items-center justify-center">
             <span><i class="fa-solid fa-plus"></i> Nuevo</span>
           </button>
           ${categoriesHTML}
           <hr class="mt-5" style="border: solid black 1px" />
           <div class="mt-3">
             <i style="color: black" class="fa-solid fa-cloud"></i>
             Almacenamiento
             <div style="color: darkgrey; font-size: 13px; text-align: center; margin-right: 30px;">
               ${getStorageUsed(currentUser)} de ${currentUser.dashboard[0].storage[0].limit} proyectos
             </div>
           </div>
           <div onclick = "renderPlans(),showPlans()" style="color: lightgreen" class="mt-3">
             Adquirir más almacenamiento
           </div>
           <div onclick = "showModalDeleteUser()" style="color: red" class="mt-3">
             Eliminar Cuenta
           </div>
         </div>
       </nav>
     </aside>

     <main class="main">
       ${showDeleteProjects()}
     </main>`;
}

const showDeleteProjects = () => {
    console.log(deletedProjects);
    const renderizedProject = renderProjectsDeleted(deletedProjects);
    return renderizedProject;
}

const renderFavoriteProjects = () => {
   let categoriesHTML = renderCategories();

   const dashboardSection = document.getElementById("dashboard-section");
   dashboardSection.innerHTML = `
     <aside>
       <nav>
         <div class="barral">
           <button onclick="showModalCreateProject()" class="mt-5 bg-yellow-500 mr-23 h-10 w-40 rounded-full text-center flex items-center justify-center">
             <span><i class="fa-solid fa-plus"></i> Nuevo</span>
           </button>
           ${categoriesHTML}
           <hr class="mt-5" style="border: solid black 1px" />
           <div class="mt-3">
             <i style="color: black" class="fa-solid fa-cloud"></i>
             Almacenamiento
             <div style="color: darkgrey; font-size: 13px; text-align: center; margin-right: 30px;">
               ${getStorageUsed(currentUser)} de ${currentUser.dashboard[0].storage[0].limit} proyectos
             </div>
           </div>
           <div onclick = "renderPlans(),showPlans()" style="color: lightgreen" class="mt-3">
             Adquirir más almacenamiento
           </div>
           <div onclick = "showModalDeleteUser()" style="color: red" class="mt-3">
             Eliminar Cuenta
           </div>
         </div>
       </nav>
     </aside>

     <main class="main">
       ${showFavoriteProjects()}
     </main>`;
}

const renderSharedProjects = () => {
   let categoriesHTML = renderCategories();

   const dashboardSection = document.getElementById("dashboard-section");
   dashboardSection.innerHTML = `
     <aside>
       <nav>
         <div class="barral">
           <button onclick="showModalCreateProject()" class="mt-5 bg-yellow-500 mr-23 h-10 w-40 rounded-full text-center flex items-center justify-center">
             <span><i class="fa-solid fa-plus"></i> Nuevo</span>
           </button>
           ${categoriesHTML}
           <hr class="mt-5" style="border: solid black 1px" />
           <div class="mt-3">
             <i style="color: black" class="fa-solid fa-cloud"></i>
             Almacenamiento
             <div style="color: darkgrey; font-size: 13px; text-align: center; margin-right: 30px;">
               ${getStorageUsed(currentUser)} de ${currentUser.dashboard[0].storage[0].limit} proyectos
             </div>
           </div>
           <div onclick = "renderPlans(),showPlans()" style="color: lightgreen" class="mt-3">
             Adquirir más almacenamiento
           </div>
           <div onclick = "showModalDeleteUser()" style="color: red" class="mt-3">
             Eliminar Cuenta
           </div>
         </div>
       </nav>
     </aside>

     <main class="main">
       ${showSharedProjects()}
     </main>`;
}

const renderSearchProjects = () => {
   let categoriesHTML = renderCategories();

   const dashboardSection = document.getElementById("dashboard-section");
   dashboardSection.innerHTML = `
     <aside>
       <nav>
         <div class="barral">
           <button onclick="showModalCreateProject()" class="mt-5 bg-yellow-500 mr-23 h-10 w-40 rounded-full text-center flex items-center justify-center">
             <span><i class="fa-solid fa-plus"></i> Nuevo</span>
           </button>
           ${categoriesHTML}
           <hr class="mt-5" style="border: solid black 1px" />
           <div class="mt-3">
             <i style="color: black" class="fa-solid fa-cloud"></i>
             Almacenamiento
             <div style="color: darkgrey; font-size: 13px; text-align: center; margin-right: 30px;">
               ${getStorageUsed(currentUser)} de ${currentUser.dashboard[0].storage[0].limit} proyectos
             </div>
           </div>
           <div onclick = "renderPlans(),showPlans()" style="color: lightgreen" class="mt-3">
             Adquirir más almacenamiento
           </div>
           <div onclick = "showModalDeleteUser()" style="color: red" class="mt-3">
             Eliminar Cuenta
           </div>
         </div>
       </nav>
     </aside>

     <main class="main">
       ${showSearchedProjects()}
     </main>`;
}

const renderRecentProjects = () => {
   let categoriesHTML = renderCategories();

   const dashboardSection = document.getElementById("dashboard-section");
   dashboardSection.innerHTML = `
     <aside>
       <nav>
         <div class="barral">
           <button onclick="showModalCreateProject()" class="mt-5 bg-yellow-500 mr-23 h-10 w-40 rounded-full text-center flex items-center justify-center">
             <span><i class="fa-solid fa-plus"></i> Nuevo</span>
           </button>
           ${categoriesHTML}
           <hr class="mt-5" style="border: solid black 1px" />
           <div class="mt-3">
             <i style="color: black" class="fa-solid fa-cloud"></i>
             Almacenamiento
             <div style="color: darkgrey; font-size: 13px; text-align: center; margin-right: 30px;">
               ${getStorageUsed(currentUser)} de ${currentUser.dashboard[0].storage[0].limit} proyectos
             </div>
           </div>
           <div onclick = "renderPlans(),showPlans()" style="color: lightgreen" class="mt-3">
             Adquirir más almacenamiento
           </div>
           <div onclick = "showModalDeleteUser()" style="color: red" class="mt-3">
             Eliminar Cuenta
           </div>
         </div>
       </nav>
     </aside>

     <main class="main">
       ${showRecentProjects()}
     </main>`;
}

const renderDashboard = async () => {
   renderNavbar(currentUser);

   let categoriesHTML = renderCategories();

   const requestOptionGet = {
    method: 'GET',
    redirect: 'follow'
   }
   const response = await fetch('http://localhost:3000/users/' + currentUser.id + '/projects', requestOptionGet);
   if(response.ok){
    const projects = await response.json();
    currentUser.dashboard[0].projects = projects;
   }

   const dashboardSection = document.getElementById("dashboard-section");
   dashboardSection.innerHTML = `
     <aside>
       <nav>
         <div class="barral">
           <button onclick="showModalCreateProject()" class="mt-5 bg-yellow-500 mr-23 h-10 w-40 rounded-full text-center flex items-center justify-center">
             <span><i class="fa-solid fa-plus"></i> Nuevo</span>
           </button>
           ${categoriesHTML}
           <hr class="mt-5" style="border: solid black 1px" />
           <div class="mt-3">
             <i style="color: black" class="fa-solid fa-cloud"></i>
             Almacenamiento
             <div style="color: darkgrey; font-size: 13px; text-align: center; margin-right: 30px;">
               ${getStorageUsed(currentUser)} de ${currentUser.dashboard[0].storage[0].limit} proyectos
             </div>
           </div>
           <div onclick = "renderPlans(),showPlans()" style="color: lightgreen" class="mt-3">
             Adquirir más almacenamiento
           </div>
           <div onclick = "showModalDeleteUser()" style="color: red" class="mt-3">
             Eliminar Cuenta
           </div>
         </div>
       </nav>
     </aside>

     <main class="main">
       ${renderProjects(currentUser.dashboard[0].projects)}
     </main>`;
}

const renderNavbar = (currentUser) => {
  const navbar = document.getElementById("storage");
  navbar.innerHTML = `<nav>
        <div class="barras">
          <div class="stylescrypt">
            <div class="contStyle"><i class="fa-solid fa-code"></i></div>
            StyleScrypt
          </div>

          <div>
            <div class="search-container">
              <i onclick="renderSearchProjects()" class="fa-solid fa-magnifying-glass"></i>
              <input id ="searchInput" type="text" placeholder="Buscar proyecto" />
            </div>
          </div>

          <div onclick = "showUserProfilePremium()"class="logo">
            <img src="${currentUser.profileImage}" alt="mario" />
          </div>
        </div>
      </nav>
      <div id="dashboard-section" class="contenedor"></div>`
}

const showFavoriteProjects = () => {
    const favoriteProjects = currentUser.dashboard[0].projects.filter(project => project.isFavorite);
    console.log(favoriteProjects);
    const renderizedProject = renderProjects(favoriteProjects);
    return renderizedProject;
}

const showSearchedProjects = () =>{
  const searchInput = document.getElementById("searchInput");
  const searchedProjects = currentUser.dashboard[0].projects.filter(project => {
      const inputOnlyLowerCase = searchInput.value.toLowerCase();
      return project.name.toLowerCase().includes(inputOnlyLowerCase);
  });
  console.log(searchedProjects);
  return renderProjects(searchedProjects);
}

const renderProjectsDeleted = (projects) => {
   let projectsHTML = '';
   projects.forEach(project => {
       projectsHTML += `
         <div onclick="restoreProject('${project.id}');showModalRestore()">
           <div style="display: grid; justify-items: center">
             <i class="${project.icon}"></i>
           </div>
           <span style="display: grid; align-items: center">${project.name}</span>
         </div>`;
   });
   return projectsHTML;
}

const renderProjects = (projects) => {
   let projectsHTML = '';
   projects.forEach(project => {
       projectsHTML += `
         <div onclick="selectProject('${project.id}'); showCodeSpace()">
           <div style="display: grid; justify-items: center">
             <i class="${project.icon}"></i>
           </div>
           <span style="display: grid; align-items: center">${project.name}</span>
         </div>`;
   });
   return projectsHTML;
}

const selectProject = async (projectId) => {
    currentProjectId = projectId;
    output.contentDocument.body.innerHTML = "";
    if (currentUser && currentProjectId) {
        const project = currentUser.dashboard[0].projects.find(p => p.id === currentProjectId);
        currentProject = project;
        verifyFavoriteProject();
        verifySharedProject();
        initializeAceEditors();
        putTheme();
        if (project && project.files) {
            project.files.forEach(file => {
                switch(file.name) {
                    case "index.html":
                        const htmlContent = file.content || localStorage.getItem("htmlCode-" + currentProjectId) || "";
                        htmlEditor.setValue(htmlContent, -1);
                        break;
                    case "styles.css":
                        const cssContent = file.content || localStorage.getItem("cssCode-" + currentProjectId) || "";
                        cssEditor.setValue(cssContent, -1);
                        break;
                    case "script.js":
                        const jsContent = file.content || localStorage.getItem("jsCode-" + currentProjectId) || "";
                        jsEditor.setValue(jsContent, -1);
                        break;
                }
            });
        }
    }
}

const cleanLocalStorage =() =>{
    localStorage.removeItem("htmlCode");
    localStorage.removeItem("cssCode");
    localStorage.removeItem("jsCode");
}


const putTheme =() =>{
  let currentTheme = localStorage.getItem("editorTheme");
  let newAceTheme ;
  if(currentTheme === "dark"){
    output.contentDocument.body.style.backgroundColor = "#1a1a1a";
    output.contentDocument.body.style.color = "white";
    newAceTheme = "ace/theme/monokai";
  }else{
    output.contentDocument.body.style.backgroundColor = "white";
    output.contentDocument.body.style.color = "black";
    newAceTheme = "ace/theme/github";
  }

  const aceTheme = newAceTheme;

  htmlEditor.setTheme(aceTheme);
  cssEditor.setTheme(aceTheme);
  jsEditor.setTheme(aceTheme);
}
const changeTheme = () => {
    let currentTheme = localStorage.getItem("editorTheme");
    const output = document.getElementById("output");
    const iconTheme = document.getElementById("theme-icon");
    let newTheme;
    let newAceTheme;
    if (currentTheme === "dark") {
        newTheme= "light"
        newAceTheme = "ace/theme/github";
        output.contentDocument.body.style.backgroundColor = "white";
        output.contentDocument.body.style.color = "black";
        iconTheme.classList.remove("fa-moon");
        iconTheme.classList.add("fa-sun");

    } else {
        newTheme = "dark";
        newAceTheme = "ace/theme/monokai";
        output.contentDocument.body.style.backgroundColor = "#1a1a1a";
        output.contentDocument.body.style.color = "white";
        iconTheme.classList.remove("fa-sun");
        iconTheme.classList.add("fa-moon");
    }

    const aceTheme = newAceTheme;

    htmlEditor.setTheme(aceTheme);
    cssEditor.setTheme(aceTheme);
    jsEditor.setTheme(aceTheme);

    localStorage.setItem("editorTheme", newTheme);
}

const showPlans = () =>{
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");

    plansSection.classList.remove("hide");
    landingPage.classList.add("hide");
    registerSection.classList.add("hide");
    paymentSection.classList.add("hide");
    storageSection.classList.add("hide");
    loginSection.classList.add("hide");
}

const showCodeSpace =() => {

    
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");
    const codeSpace = document.getElementById("code-section");

    landingPage.classList.add("hide");
    plansSection.classList.add("hide");
    registerSection.classList.add("hide");
    paymentSection.classList.add("hide");
    codeSpace.classList.remove("hide");
    storageSection.classList.add("hide");
    loginSection.classList.add("hide");
}

const closePlansSection = () => {
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");

    plansSection.classList.add("hide");
    landingPage.classList.remove("hide");
    registerSection.classList.add("hide");
    paymentSection.classList.add("hide");
    storageSection.classList.add("hide");
    loginSection.classList.add("hide");
}

const showFormRegister = () => {
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");

    registerSection.classList.remove("hide");
    landingPage.classList.add("hide");
    paymentSection.classList.add("hide");
    plansSection.classList.add("hide");
    storageSection.classList.add("hide");
    loginSection.classList.add("hide");


    hideAllErrors();
}

const showFormLogin = () => {
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");

    loginSection.classList.remove("hide");
    landingPage.classList.add("hide");
    registerSection.classList.add("hide");
    paymentSection.classList.add("hide");
    plansSection.classList.add("hide");
    storageSection.classList.add("hide");

    hideAllErrors();
}

const closeUserDashboard = () =>{
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");

    plansSection.classList.add("hide");
    landingPage.classList.remove("hide");
    registerSection.classList.add("hide");
    paymentSection.classList.add("hide");
    storageSection.classList.add("hide");
    loginSection.classList.add("hide");
}

const closeFormLogin = () => {
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");

    registerSection.classList.add("hide");
    landingPage.classList.remove("hide");
    paymentSection.classList.add("hide");
    plansSection.classList.add("hide");
    storageSection.classList.add("hide");
    loginSection.classList.add("hide");
}
const closeFormRegister = () => {
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");

    registerSection.classList.add("hide");
    landingPage.classList.remove("hide");
    paymentSection.classList.add("hide");
    plansSection.classList.add("hide");
    storageSection.classList.add("hide");
    loginSection.classList.add("hide");
}
const showUserProfilePremium = () => {
    const landingPage = document.getElementById("landing-page");
    const storageSection =  document.getElementById("storage");
    const loginSection = document.getElementById("login");
    const plansSection = document.getElementById("plans");
    const registerSection = document.getElementById("register-section");
    const paymentSection = document.getElementById("payment");

    plansSection.classList.add("hide");
    landingPage.classList.add("hide");
    registerSection.classList.add("hide");
    paymentSection.classList.add("hide");
    storageSection.classList.add("hide");
    loginSection.classList.add("hide");
}

const showUserStorage = async () =>{
    const storageSection = document.getElementById("storage");
    const landingPage = document.getElementById("landing-page");
    const sectionCode = document.getElementById("code-section");
    const paymentSection = document.getElementById("payment");
    const plans = document.getElementById("plans");

    if (currentUser) {
        storageSection.classList.remove("hide");
        landingPage.classList.add("hide");
        sectionCode.classList.add("hide");
        paymentSection.classList.add("hide");
        plans.classList.add("hide");
        renderDashboard(currentUser);
    }
}

const validations = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    name: /^[a-zA-Z\s]+$/,
    phone: /^\+?[0-9]{1,3}?[-. ]?([0-9]{3}[-. ]?){2}[0-9]{4}$/,
    creditCard : /^\d{16}$/,
    cvv: /^\d{3,4}$/,
    expirationDate: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
}

const showFieldError = (fieldId, message) => {
    const errorElement = document.getElementById(fieldId + '-error');

    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove("hide");
    }
}

const hideAllErrors = () => {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.classList.add('hide');
    });
}

const output = document.getElementById("output");

function isSaveFalse(){
   currentProject.isSave = false;
}

function isSaveCode(){
  if(!currentProject.isSave){
    showModalWarning();
  }else if (currentProject.isSave){
    showUserStorage();
  }
}

const compileCode = async () =>{
    if (currentUser && currentProjectId) {
        const currentProject = currentUser.dashboard[0].projects.find(p => p.id === currentProjectId);
        currentProject.isSave = true;
        if (currentProject && currentProject.files) {
            currentProject.files.forEach(file => {
                switch(file.name) {
                    case "index.html":
                        file.content = htmlEditor.getValue();
                        break;
                    case "styles.css":
                        file.content = cssEditor.getValue();
                        break;
                    case "script.js":
                        file.content = jsEditor.getValue();
                        break;
                }
            });
        }
    }
    const requestOptionPut = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentProject)
    }

    await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/update/'+ currentProjectId, requestOptionPut);
    getUserFromBackend();
}

const showModalCreateProject = () =>{
    const modalCreateProject = document.getElementById("popup-modal-project");
    modalCreateProject.classList.remove("hidden");
}

const closeModalCreateProject = () =>{
    const modalCreateProject = document.getElementById("popup-modal-project");
    modalCreateProject.classList.add("hidden");
}


const createProject = async () =>{
  const valueProjectName = document.getElementById("project-name-input").value;

  if(currentUser.dashboard[0].projects.length >= currentUser.dashboard[0].storage[0].limit){
    alert("Has alcanzado el límite de proyectos.");
    return;
  }

    const newProject = {
      id : uuid.v4(),
      name: valueProjectName,
      icon: "fa-solid fa-folder",
      isFavorite: false,
      isShared: false,
      isDeleted: false,
      isRecent: false,
      files : [
        {
          name: "index.html",
          content: null,
        },
        {
          name: "styles.css",
          content: null,
        },
        {
          name: "script.js",
          content: null,
        }
      ]
    }

    const requestOptionPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProject)
    }

    const response = await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/create', requestOptionPost);
    const newProjectFromServer = await response.json();

    currentUser.dashboard[0].projects.push(newProjectFromServer);
    console.log(currentUser.dashboard[0].projects);
    await renderDashboard(currentUser);
}

// const createUser = () =>{
//   const newUser = {
//     id: uuid.v4(),
//     email: document.getElementById("register-mail").value,
//     password: document.getElementById("register-password").value,
//     name: document.getElementById("register-name").value,
//     phone: document.getElementById("register-phone").value,
//     profileImage: "../img/placeholder-user.jpg",
//     subscription: plansData[0].id,
//     dashboard: [
//       {
//         projects: [],
//         storage: [
//           {
//             limit: 10,
//             used: 0
//           }
//         ],
//         categories: [
//           {
//             name: "Mis archivos",
//             icon: "fa-solid fa-laptop",
//           },
//           {
//             name: "Favoritos",
//             icon: "fa-solid fa-star",
//           },
//           {
//             name: "Compartidos",
//             icon: "fa-solid fa-people-group",

//           },
//           {
//             name: "Recientes",
//             icon: "fa-solid fa-clock",

//           },
//           {
//             name: "Papelera",
//             icon: "fa-solid fa-trash-can",
//           }
//         ]
//       }
//     ]
//   };
//   usersData.push(newUser);
// }

const deleteUser = async () =>{
  const userToDelete = currentUser;
  const requestOptionDelete = {
    method: 'DELETE'
  }

  await fetch('http://localhost:3000/users/delete/'+ userToDelete.id, requestOptionDelete);
  currentUser = null;
  closeUserDashboard();
}

const deleteProject =  async () =>{

  const projectToDelete = currentProject;
  projectToDelete.isDeleted =true;
  projectToDelete.isFavorite = false;
  projectToDelete.isShared = false;
  projectToDelete.isRecent = false;
  projectToDelete.isSave = false;
  const requestOptionDelete = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectToDelete)
  }

  const requestOptionDelete2 = {
    method: 'DELETE',
  }


  await fetch ('http://localhost:3000/users/'+ currentUser.id+'/projects/delete/'+ projectToDelete.id, requestOptionDelete);
  await getDeletedProjects();
  setTimeout(async () => {
    deletedProjects = deletedProjects.filter(
      project => project.id !== projectToDelete.id
    );
    await fetch ('http://localhost:3000/users/projects/'+ projectToDelete.id+ '/delete/', requestOptionDelete2);
    console.log("Proyecto eliminado permanentemente:", projectToDelete.name);
    renderDashboard();
  }, 15000);

  await getDeletedProjects();
  await renderDashboard();
  showUserStorage();
}

const restoreProject = async (projectIdDeleted) =>{
  const projectToRestore = deletedProjects.find(p => p.id === projectIdDeleted);
  if (projectToRestore){
    projectToRestore.isDeleted = false;
    const requestOptionPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectToRestore)
    }
    await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/restore/'+ projectToRestore.id, requestOptionPost);

    currentUser.dashboard[0].projects.push(projectToRestore);
    deletedProjects = deletedProjects.filter(p => p.id !== projectIdDeleted);

  }
}

const verifyFavoriteProject = async () =>{
    if (currentProject && currentProject.isFavorite) {
        const iconFavorite = document.getElementById("favoriteSpace");
        iconFavorite.style.color = "#faba3d";
    } else {
        const iconFavorite = document.getElementById("favoriteSpace");
        iconFavorite.style.color = "black";
    }
}

const desmarkFavorite = async () =>{
    currentProject.isFavorite = false;
    const requestOptionPut = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentProject)
    }

    await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/update/'+ currentProjectId, requestOptionPut);
    getUserFromBackend();
    verifyFavoriteProject();
}

const markFavorite = async () =>{

  if(!currentProject.isFavorite){
    currentProject.isFavorite = true;
    const iconFavorite = document.getElementById("favoriteSpace");
    iconFavorite.style.color = "#faba3d";
    console.log(currentProject)
    const requestOptionPut = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(currentProject)
  }

  await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/update/'+ currentProjectId, requestOptionPut);
  getUserFromBackend();

  }else{
    desmarkFavorite();
  }
}

const desmarkShared = async () =>{
    currentProject.isShared =false;
    const requestOptionPut = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentProject)
    }

    await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/update/'+ currentProjectId, requestOptionPut);
    getUserFromBackend();
    verifySharedProject();
}

const markShared = async () =>{
    if(!currentProject.isShared){
        currentProject.isShared = true;
        const iconShared = document.getElementById("sharedSpace");
        iconShared.style.color = "#1967d4ff";
        const requestOptionPut = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(currentProject)
        }

        await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/update/'+ currentProjectId, requestOptionPut);
        getUserFromBackend();

    }else{
        desmarkShared();
    }
}

const verifySharedProject = () =>{
    if (currentProject && currentProject.isShared) {
        const iconShared = document.getElementById("sharedSpace");
        iconShared.style.color = "#1967d4ff";
    } else {
        const iconShared = document.getElementById("sharedSpace");
        iconShared.style.color = "black";
    }
}

const desmarkRecent = async (projectToUnmark) =>{
    const projectToChange = projectToUnmark;
    projectToChange.isRecent = false;
    const requestOptionPut = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectToChange)
    }

    const response = await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/update/'+ projectToChange.id, requestOptionPut);
    const updatedProject = await response.json();
    
    const projectIndex = currentUser.dashboard[0].projects.findIndex(p => p.id === projectToChange.id);
    if (projectIndex !== -1) {
        currentUser.dashboard[0].projects[projectIndex] = updatedProject;
    }
    
    await renderDashboard();
}

const markRecent = async() =>{
    if(!currentProject.isRecent){
        currentProject.isRecent = true;
        const requestOptionPut = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(currentProject)
        }

        const response = await fetch('http://localhost:3000/users/'+ currentUser.id+'/projects/update/'+ currentProjectId, requestOptionPut);
        const recentProject = await response.json();
        setTimeout(() => {
            if(recentProject && recentProject.isRecent) {
                desmarkRecent(recentProject);
                // renderDashboard(currentUser);
                // console.log("Proyecto desmarcado como reciente automáticamente:", recentProject.name);
            }
        }, 15000);
    }
}

const verifyRecentProject = () =>{
    if (currentProject && !currentProject.isRecent) {
        markRecent();
        console.log("Proyecto marcado como reciente");
    } else {
        console.log("El proyecto ya esta marcado como reciente");
        return 0;
    }
}

const showSharedProjects = () => {
    const sharedProjects = currentUser.dashboard[0].projects.filter(project => project.isShared);
    console.log(sharedProjects);
    const renderizedProject = renderProjects(sharedProjects);
    return renderizedProject;
}

const showRecentProjects = () => {
    const recentProjects = currentUser.dashboard[0].projects.filter(project => project.isRecent);
    console.log(recentProjects);
    const renderizedProject = renderProjects(recentProjects);
    return renderizedProject;
}

function saveCodeLocalStorage(){
    localStorage.setItem(`htmlCode-${currentProjectId}`, htmlEditor.getValue());
    localStorage.setItem(`cssCode-${currentProjectId}`, cssEditor.getValue());
    localStorage.setItem(`jsCode-${currentProjectId}`, jsEditor.getValue());
}

function cancelPayment(){
  showUserStorage();
}

function executeCode(){
    const htmlContent = htmlEditor.getValue();
    const cssContent = cssEditor.getValue();
    const jsContent = jsEditor.getValue();

    output.contentDocument.body.innerHTML = htmlContent + "<style>" + cssContent + "</style>";
    const script = output.contentDocument.createElement("script");
    script.textContent = jsContent;
    output.contentDocument.body.appendChild(script);
}

function openModal(){
    document.getElementById("modalContactUs").classList.remove("translate-x-full");
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("hide");
}

function closeModal(){
    document.getElementById("modalContactUs").classList.add("translate-x-full");
    const overlay = document.getElementById("overlay");
    overlay.classList.add("hide");
}

function showModalWarning(){
    const modalWarning = document.getElementById("popup-modal");
    modalWarning.classList.remove("hidden");
    const overlay = document.getElementById("overlay2");
    overlay.classList.remove("hide");
}

function closeModalWarning(){
    const modalWarning = document.getElementById("popup-modal");
    modalWarning.classList.add("hidden");
    const overlay = document.getElementById("overlay2");
    overlay.classList.add("hide");
}
function showModalDelete(){
    const modalDelete = document.getElementById("popup-modal-delete");
    modalDelete.classList.remove("hidden");
    const overlay = document.getElementById("overlay2");
    overlay.classList.remove("hide");
}

function closeModalDelete(){
    const modalDelete = document.getElementById("popup-modal-delete");
    modalDelete.classList.add("hidden");
    const overlay = document.getElementById("overlay2");
    overlay.classList.add("hide");
}

function showModalDeleteUser(){
    const modalDeleteUser = document.getElementById("popup-modal-delete-user");
    modalDeleteUser.classList.remove("hidden");
    const overlay = document.getElementById("overlay2");
    overlay.classList.remove("hide");
}

function closeModalDeleteUser(){
    const modalDeleteUser = document.getElementById("popup-modal-delete-user");
    modalDeleteUser.classList.add("hidden");
    const overlay = document.getElementById("overlay2");
    overlay.classList.add("hide");
}

function showModalRestore(){
    const modalRestore = document.getElementById("popup-modal-restore");
    modalRestore.classList.remove("hidden");
    const overlay = document.getElementById("overlay2");
    overlay.classList.remove("hide");
}
const  closeModalRestore = async ()=>{
    const modalRestore = document.getElementById("popup-modal-restore");
    modalRestore.classList.add("hidden");
    const overlay = document.getElementById("overlay2");
    overlay.classList.add("hide");
}

const verifyPlan = (planID, planType) =>{
  if(!currentUser){
      showFormLogin();
  }
  else if(currentUser && currentUser.subscription === planID){
    const errorMessage = document.getElementById(`p${planID}-error`);
    errorMessage.classList.remove("hide");
    setTimeout(() => {
        errorMessage.classList.add("hide");
    }, 3000);
  }else if(planID === 2 || planID === 3){
    selectedPlan(planType, planID);
  }else if (planID ===1){
    changePlan(planID);
  }
} 

const changePlan = async (planID) => {

  const requestOptionPut = {
    method: 'PUT',
  }

  const response = await fetch('http://localhost:3000/users/'+currentUser.id+'/plan/'+ planID+'/update', requestOptionPut);
  if(response.ok){
    const updatedUser = await response.json();
    currentUser = updatedUser;
  }

  await renderDashboard();
  showUserStorage();
}



const verifyUser = () =>{
  if(!currentUser){
      closePlansSection();
  }else{
      showUserStorage();
  }
}
const selectedPlan = (planType, planID) => {

    if(currentUser){
      const landingPage = document.getElementById("landing-page");
      const storageSection =  document.getElementById("storage");
      const loginSection = document.getElementById("login");
      const plansSection = document.getElementById("plans");
      const registerSection = document.getElementById("register-section");
      const paymentSection = document.getElementById("payment");

      plansSection.classList.add("hide");
      landingPage.classList.add("hide");
      registerSection.classList.add("hide");
      paymentSection.classList.remove("hide");
      storageSection.classList.add("hide");
      loginSection.classList.add("hide");

      const planSelected = document.getElementById("detalle-compra-plan");
      const paymentForm= document.getElementById("formulario-registro-pago");

      plansData.forEach(p => {

        if (planType === p.planType){
          planSelected.innerHTML = `<div class="plan" id ="plan${p.planType}">
                  <div class="section-top-plan">
                      <i class="${p.icons[0]}"></i>
                      <div class="nombre-plan">${p.planType}</div>
                      <div class="costo-plan">
                          <i class="${p.icons[1]}"></i>
                          <div>${p.planPrice}</div>
                          <div class="centavos-mes">
                              <div>00</div>
                              <div class="mes">mes</div>
                          </div>
                      </div>
                  </div>
                  <div class="descripcion-plan">${p.title}</div>
                  <div class="lista-plan">
                      <div>✔ ${p.content[0]}</div>
                      <div>✔ ${p.content[1]}</div>
                      <div>✔ ${p.content[2]}</div>
                  </div>
              </div>`;
        }

      })
      paymentForm.innerHTML = `<div id="superior-formulario-pago">
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        Tu pago esta cifrado y es 100% seguro.
                    </div>
                    <a onclick = "showUserStorage()" href="#">
                        <i class="fa-solid fa-xmark"></i>
                    </a>
                </div>
                <div class="titulo">Regístrate</div>
                <div id="preguntas-pago">
                    <div>
                      <input id="numero-de-tarjeta" type="text" class="registros-pago" placeholder="Numero de tarjeta"></input>
                      <div id="numero-de-tarjeta-error" class="error-message hide"></div>
                    </div>
                    <div>
                      <input id="nombre-titular" type="text" class="registros-pago" placeholder="Nombre del titular"></input>
                      <div id="nombre-titular-error" class="error-message hide"></div>
                    </div>
                    <div id="fecha-cvv">
                        <div>
                          <input id="fecha-vencimiento" type="text" class="registros-pago" placeholder="Fecha de vencimiento"></input>
                          <div id="fecha-vencimiento-error" class="error-message hide"></div>
                        </div>
                        <div>
                          <input id="CVV" type="password" class="registros-pago" placeholder="CVV"></input>
                          <div id="CVV-error" class="error-message hide"></div>
                        </div>
                    </div>
                    <div>
                      <input id="correo-pago" type="text" class="registros-pago" placeholder="Correo electronico"></input>
                      <div id="correo-pago-error" class="error-message hide"></div>
                    </div>
                </div>
                <div id="botones-pago">
                    <a onclick="cancelPayment()" href="#" id="boton-cancelar">Cancelar</a>
                    <a onclick="validateFormPayment(), changePlan(${planID})" href="#" id="boton-confirmar">Confirmar</a>
                </div>`
    }else{
      showFormLogin();
    }

}
