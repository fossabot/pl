import {Router} from 'express';

const router = Router();

router.get('/test', (res) => res.status(500).json({ isWorking: true }));

export default router;
