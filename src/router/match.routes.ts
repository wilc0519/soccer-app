import Router from 'express';
import { MatchController } from '../controllers/match.controller';

const router = Router();
router.get('/position', MatchController.getPositionTable);

export default router;
