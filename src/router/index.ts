import { Router } from 'express';
import playerRouter from './player.routes';
import teamRouter from './team.routes';
import matchRouter from './match.routes';

const router = Router();

router.use('/players', playerRouter);
router.use('/teams', teamRouter);
router.use('/matches', matchRouter);

export default router;
