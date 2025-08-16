import { v4 as uuidv4 } from 'uuid';
import { plansData } from './plans.data.js';
export const usersData = [
    {
        id: uuidv4(),
        name: "Juan Carlos",
        email: "juan.perez@gmail.com",
        password: "password123",
        phone: "+504 9876-5432",
        profileImage: "img/mario.jpg",
        subscription: plansData[0].id,
        dashboard: [
            {
                projects: [
                    {
                        id: uuidv4(),
                        name: "Mi Primer Proyecto",
                        icon: "fa-solid fa-folder",
                        isFavorite: false,
                        isShared: false,
                        isDeleted: false,
                        isRecent: false,
                        isSave: false,
                        files: [
                            {
                                name: "index.html",
                                content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primer Proyecto</title>
</head>
<body>
    <h1>Hola Mundo</h1>
</body>
</html>`
                            },
                            {
                                name: "styles.css",
                                content: `title {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
}`
                            },
                            {
                                name: "script.js",
                                content: `console.log('Hola Mundo');`
                            }
                        ]
                    },
                    {
                        id: uuidv4(),
                        name: "Mi Segundo Proyecto",
                        icon: "fa-solid fa-folder",
                        isFavorite: true,
                        isShared: false,
                        isDeleted: false,
                        isRecent: false,
                        isSave: false,
                        files: [
                            {
                                name: "index.html",
                                content: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Mi Segundo Proyecto</title>\n</head>\n<body>\n    <h1>Bienvenido a mi segundo proyecto</h1>\n</body>\n</html>"
                            },
                            {
                                name: "styles.css",
                                content: "body {\n    background-color: #f0f0f0;\n    font-family: Arial, sans-serif;\n}\n\nh1 {\n    color: #333;\n}"
                            },
                            {
                                name: "script.js",
                                content: "console.log('Bienvenido a mi segundo proyecto');"
                            }
                        ]
                    },
                    {
                        id: uuidv4(),
                        name: "Mi Tercer Proyecto",
                        icon: "fa-solid fa-folder",
                        isFavorite: false,
                        isShared: true,
                        isDeleted: false,
                        isRecent: false,
                        isSave: false,
                        files: [
                            {
                                name: "index.html",
                                content: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Mi Tercer Proyecto</title>\n</head>\n<body>\n    <h1>Proyecto compartido</h1>\n</body>\n</html>"
                            },
                            {
                                name: "styles.css",
                                content: "body {\n    background-color: #f0f0f0;\n    font-family: Arial, sans-serif;\n}\n\nh1 {\n    color: #333;\n}"
                            },
                            {
                                name: "script.js",
                                content: "console.log('Proyecto compartido');"
                            }
                        ]
                    }
                ],
                storage: [
                    {
                        limit: 10,
                        unit: "projects"
                    }
                ],
                categories: [
                    {
                        name: "Mis archivos",
                        icon: "fa-solid fa-laptop",
                    },
                    {
                        name: "Favoritos",
                        icon: "fa-solid fa-star",
                    },
                    {
                        name: "Compartidos",
                        icon: "fa-solid fa-people-group",
                    },
                    {
                        name: "Recientes",
                        icon: "fa-solid fa-clock",
                    },
                    {
                        name: "Papelera",
                        icon: "fa-solid fa-trash-can",
                    }
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        name: "María Elena Rodríguez",
        email: "maria.rodriguez@gmail.com",
        password: "password456",
        phone: "+504 9876-5432",
        profileImage: "img/mario.jpg",
        subscription: plansData[1].id,
        dashboard: [
            {
                projects: [
                    {
                        id: uuidv4(),
                        name: "Mi Primer Proyecto",
                        icon: "fa-solid fa-folder",
                        isFavorite: false,
                        isShared: false,
                        isDeleted: false,
                        isRecent: false,
                        isSave: false,
                        files: [
                            {
                                name: "index.html",
                                content: null
                            },
                            {
                                name: "styles.css",
                                content: null
                            },
                            {
                                name: "script.js",
                                content: null
                            }
                        ]
                    },
                    {
                        id: uuidv4(),
                        name: "Mi Segundo Proyecto",
                        icon: "fa-solid fa-folder",
                        isFavorite: true,
                        isShared: false,
                        isDeleted: false,
                        isRecent: false,
                        isSave: false,
                        files: [
                            {
                                name: "index.html",
                                content: null
                            },
                            {
                                name: "styles.css",
                                content: null
                            },
                            {
                                name: "script.js",
                                content: null
                            }
                        ]
                    },
                    {
                        id: uuidv4(),
                        name: "Mi Tercer Proyecto",
                        icon: "fa-solid fa-folder",
                        isFavorite: false,
                        isShared: true,
                        isDeleted: false,
                        isRecent: false,
                        isSave: false,
                        files: [
                            {
                                name: "index.html",
                                content: null
                            },
                            {
                                name: "styles.css",
                                content: null
                            },
                            {
                                name: "script.js",
                                content: null
                            }
                        ]
                    },
                    {
                        id: uuidv4(),
                        name: "Mi Cuarto Proyecto",
                        icon: "fa-solid fa-folder",
                        isFavorite: false,
                        isShared: false,
                        isDeleted: false,
                        isRecent: false,
                        isSave: false,
                        files: [
                            {
                                name: "index.html",
                                content: null
                            },
                            {
                                name: "styles.css",
                                content: null
                            },
                            {
                                name: "script.js",
                                content: null
                            }
                        ]
                    }
                ],
                storage: [
                    {
                        limit: 50,
                        unit: "projects"
                    }
                ],
                categories: [
                    {
                        name: "Mis archivos",
                        icon: "fa-solid fa-laptop",
                    },
                    {
                        name: "Favoritos",
                        icon: "fa-solid fa-star",
                    },
                    {
                        name: "Compartidos",
                        icon: "fa-solid fa-people-group",
                    },
                    {
                        name: "Recientes",
                        icon: "fa-solid fa-clock",
                    },
                    {
                        name: "Papelera",
                        icon: "fa-solid fa-trash-can",
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=users.data.js.map