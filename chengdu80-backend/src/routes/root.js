import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Welcome to the backend!! :-)');
});

export default router;
