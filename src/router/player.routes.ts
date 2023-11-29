import { Router } from 'express';
import { PlayerController } from '../controllers/player.controller';

const router = Router();

router.get('/', PlayerController.getAll);

export default router;
