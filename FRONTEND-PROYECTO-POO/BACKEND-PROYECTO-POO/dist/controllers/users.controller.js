import DeletedProject from "../models/projectsDelete.mongo.js";
import User from "../models/users.mongo.js";
import Plan from "../models/plans.mongo.js";
export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (deletedUser) {
        res.json({ message: "Usuario eliminado exitosamente" });
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
export const getUserWithoutDashboard = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
        const { dashboard, ...rest } = user;
        res.json(rest);
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
export const getUsersPerId = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
export const getUserPlan = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
        res.json(user.subscription);
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
export const getUserCategories = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
        res.json(user.dashboard[0].categories);
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
export const getProjectById = async (req, res) => {
    const userId = req.params.id;
    const projectId = req.params.projectId;
    const user = await User.findById(userId);
    if (user) {
        const project = user.dashboard[0].projects.find((p) => p.id === projectId);
        if (project) {
            res.json(project);
        }
        else {
            res.status(404).json({ message: "Proyecto no encontrado" });
        }
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
export const getProjectsByUserID = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user && user.dashboard && user.dashboard[0]) {
        res.json(user.dashboard[0].projects);
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
export const updateProject = async (req, res) => {
    const userId = req.params.id;
    const projectId = req.params.projectId;
    const user = await User.findById(userId);
    if (user) {
        const project = user.dashboard[0].projects.find((p) => p.id === projectId);
        if (project) {
            const { isFavorite, isShared, isDeleted, isRecent, isSave, files } = req.body;
            if (isFavorite != undefined)
                project.isFavorite = isFavorite;
            if (isShared != undefined)
                project.isShared = isShared;
            if (isDeleted != undefined)
                project.isDeleted = isDeleted;
            if (isRecent != undefined)
                project.isRecent = isRecent;
            if (isSave != undefined)
                project.isSave = isSave;
            if (files != undefined)
                project.files = files;
            await user.save();
            res.json(project);
        }
    }
};
export const shareProjectWithUser = async (req, res) => {
    const userId = req.params.id;
    const projectId = req.params.projectId;
    const userEmail = req.body.email;
    const user = await User.findById(userId);
    if (user) {
        const project = user.dashboard[0].projects.find(p => p.id === projectId);
        project?.shareWith.push(userEmail);
        const userToShare = await User.findOne({ email: userEmail });
        if (userToShare) {
            if (project) {
                userToShare.dashboard[0].projects.push(project);
                await userToShare.save();
                await user.save();
                res.json({ message: "Proyecto compartido exitosamente" });
            }
            else {
                res.status(404).json({ message: "Proyecto no encontrado" });
            }
        }
        else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    }
};
export const unshareProjectWithUser = async (req, res) => {
    const userId = req.params.id;
    const projectId = req.params.projectId;
    const emailToUnshare = req.params.email;
    const user = await User.findById(userId);
    if (user) {
        const project = user.dashboard[0].projects.find(p => p.id === projectId);
        if (project) {
            project.shareWith = project.shareWith.filter(email => email !== emailToUnshare);
            const userToUnshare = await User.findOne({ email: emailToUnshare });
            if (userToUnshare) {
                const projectIndex = userToUnshare.dashboard[0].projects.findIndex(p => p.id === projectId);
                if (projectIndex !== -1) {
                    userToUnshare.dashboard[0].projects.splice(projectIndex, 1);
                    await userToUnshare.save();
                }
            }
            await user.save();
            res.json({ message: "Proyecto descompartido exitosamente" });
        }
    }
};
export const getDeletedProjects = async (req, res) => {
    const deletedProjects = await DeletedProject.find();
    res.json(deletedProjects);
};
export const deleteProjectFromUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const projectId = req.params.projectId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        if (!user.dashboard || !user.dashboard[0] || !user.dashboard[0].projects) {
            return res
                .status(404)
                .json({ message: "Dashboard no encontrado para el usuario" });
        }
        const projectIndex = user.dashboard[0].projects.findIndex((p) => p.id == projectId);
        if (projectIndex === -1) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        const project = user.dashboard[0].projects[projectIndex];
        if (!project) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        const { isDeleted, isFavorite, isRecent, isShared, isSave } = req.body;
        if (isDeleted != undefined)
            project.isDeleted = isDeleted;
        if (isFavorite != undefined)
            project.isFavorite = isFavorite;
        if (isRecent != undefined)
            project.isRecent = isRecent;
        if (isShared != undefined)
            project.isShared = isShared;
        if (isSave != undefined)
            project.isSave = isSave;
        const deletedProjectData = {
            id: project.id,
            name: project.name,
            icon: project.icon,
            isDeleted: project.isDeleted,
            isFavorite: project.isFavorite,
            isRecent: project.isRecent,
            isSave: project.isSave,
            isShared: project.isShared,
            files: project.files?.map((f) => ({
                name: f.name,
                content: f.content,
            })),
        };
        await DeletedProject.create(deletedProjectData);
        user.dashboard[0].projects.splice(projectIndex, 1);
        await user.save();
        res.json({ message: "Proyecto eliminado exitosamente" });
    }
    catch (error) {
        console.error("Error al eliminar proyecto del usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
export const deleteProjectFromBin = async (req, res) => {
    const projectId = req.params.projectId;
    const deleted = await DeletedProject.findOneAndDelete({ id: projectId });
    if (deleted) {
        res.json({ message: "Proyecto eliminado de la papelera exitosamente" });
    }
    else {
        res.status(404).json({ message: "Proyecto no encontrado en la papelera" });
    }
};
export const createProject = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
        const { id, name, icon, isFavorite, isShared, isDeleted, isRecent, isSave, files, } = req.body;
        if (name) {
            const newProject = {
                id: id,
                name: name,
                icon: icon,
                isFavorite: isFavorite,
                isShared: isShared,
                isDeleted: isDeleted,
                isRecent: isRecent,
                isSave: isSave,
                files: files,
            };
            user.dashboard[0].projects.push(newProject);
            await user.save();
            res.status(201).json(newProject);
        }
        else {
            res.status(400).json({ message: "Faltan datos para crear el proyecto" });
        }
    }
};
export const restoreProject = async (req, res) => {
    const userId = req.params.id;
    const projectId = req.params.projectId;
    const { isDeleted } = req.body;
    const user = await User.findById(userId);
    if (user) {
        const deletedProject = await DeletedProject.findOne({ id: projectId });
        if (deletedProject) {
            deletedProject.isDeleted = isDeleted;
            const plainProject = deletedProject.toObject ? deletedProject.toObject() : deletedProject;
            user.dashboard[0].projects.push(plainProject);
            await user.save();
            await DeletedProject.findOneAndDelete({ id: projectId });
            res.json({ message: "Proyecto restaurado exitosamente" });
        }
        else {
            res
                .status(404)
                .json({ message: "Proyecto no encontrado en la papelera" });
        }
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
export const updateUserPlan = async (req, res) => {
    const userId = req.params.id;
    const planId = req.params.planId;
    const user = await User.findById(userId);
    if (user) {
        const currentPlan = await Plan.findOne({ id: planId });
        user.dashboard[0].storage[0].limit = currentPlan?.maxProjects;
        user.subscription = currentPlan?.id;
        await user.save();
        res.json(user);
    }
    else {
        res.status(404).json({ message: "Plan no encontrado" });
    }
};
//# sourceMappingURL=users.controller.js.map