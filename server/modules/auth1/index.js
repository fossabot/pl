import {Router} from 'express';

const router = Router();

router.post('/', (req, res) => {
  const {isWorking} = req.body;
  return res.status(200).json({ isWorking: !isWorking });
});
router.get('/', (req, res) => {
  return res.status(200).json({ isWorking: true });
});

export default {
  route: '/auth',
  router
};
