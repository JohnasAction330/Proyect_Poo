import { Router } from 'express';
import { validateLogin } from '../controllers/auth.controller.js';
import { validateRegister } from '../controllers/auth.controller.js';
const router = Router();
router.post('/login', validateLogin);
router.post('/register', validateRegister);
export default router;
//# sourceMappingURL=auth.router.js.map