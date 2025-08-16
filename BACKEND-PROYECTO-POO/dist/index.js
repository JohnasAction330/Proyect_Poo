import express from "express";
import usersRouter from "./routers/users.router.js";
import authRouter from "./routers/auth.router.js";
import plansRouter from "./routers/plans.router.js";
import cors from 'cors';
import './database/database.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/plans', plansRouter);
app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000");
});
//# sourceMappingURL=index.js.map