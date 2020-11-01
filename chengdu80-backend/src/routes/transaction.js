import { Router } from 'express';
import { getTransactions } from '../services/transactionService';
const router = Router();

router.get('/:ticker', (req, res) => {
  getTransactions(req.params.ticker.toUpperCase())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving transactions.',
      });
    });
});

export default router;
