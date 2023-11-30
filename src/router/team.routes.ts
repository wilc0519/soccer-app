import Router from 'express';
import { TeamController } from '../controllers/team.controller';

const router = Router();

router.get('/', TeamController.getAll);
router.get('/:id', TeamController.get);
router.post('/', TeamController.create);
router.put('/:id', TeamController.update);
router.delete('/:id', TeamController.remove);

export default router;
