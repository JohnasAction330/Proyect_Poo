import { v4 as uuidv4 } from 'uuid';
import User from '../models/users.mongo.js';
export const validateLogin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email, password });
    if (user) {
        res.json(user);
    }
    else {
        res.status(401).json({ message: "Credenciales inválidas" });
    }
};
export const validateRegister = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(409).json({ message: "El usuario ya existe" });
    }
    else {
        const newUser = await User.create({
            id: uuidv4(),
            email,
            password,
            name,
            phone,
            profileImage: "../img/placeholder-user.jpg",
            subscription: 1,
            dashboard: [
                {
                    projects: [],
                    storage: [
                        { limit: 10, unit: "projects" }
                    ],
                    categories: [
                        { name: "Mis archivos", icon: "fa-solid fa-laptop" },
                        { name: "Favoritos", icon: "fa-solid fa-star" },
                        { name: "Compartidos", icon: "fa-solid fa-people-group" },
                        { name: "Recientes", icon: "fa-solid fa-clock" },
                        { name: "Papelera", icon: "fa-solid fa-trash-can" }
                    ]
                }
            ]
        });
        res.status(201).json(newUser);
    }
};
//# sourceMappingURL=auth.controller.js.map