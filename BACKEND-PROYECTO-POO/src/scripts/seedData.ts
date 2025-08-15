import mongoose from "mongoose";
import User from '../models/users.mongo.js';
import Plan from '../models/plans.mongo.js';
import Project  from "../models/projectsDelete.mongo.js";
import config from "../config/config.js";
import { usersData } from "../data/users.data.js";
import { plansData } from "../data/plans.data.js";
import { deletedProjects } from "../data/projectsDelete.data.js";

mongoose.connect(config.mongoUri).then(async() => {
  console.log('Conectado a la base de datos');

  await User.insertMany(usersData);
  await Plan.insertMany(plansData);
  await Project.insertMany(deletedProjects);

  console.log('Datos sembrados correctamente');
}).catch((error) => {
  console.error('Error de conexión a MongoDB:', error);
});
