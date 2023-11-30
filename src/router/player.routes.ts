import { Router } from 'express';
import { PlayerController } from '../controllers/player.controller';

const router = Router();

router.get('/', PlayerController.getAll);
router.get('/:id', PlayerController.get);
router.post('/', PlayerController.create);
router.put('/:id', PlayerController.update);

export default router;
