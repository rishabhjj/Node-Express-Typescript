import * as express from 'express';
import { UserController } from '../../../controllers/UserContoller';
const router = express.Router();

router.get('/profile', UserController.getUserProfileData);

export default router;
