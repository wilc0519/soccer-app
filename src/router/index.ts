import { Router } from 'express';
import playerRouter from './player.routes';
import teamRouter from './team.routes';

const router = Router();

router.use('/players', playerRouter);
router.use('/teams', teamRouter);

export default router;
