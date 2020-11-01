import { Router } from 'express';
import {
  getWatchlist,
  addToWatchlist,
  deleteFromWatchlist,
} from '../services/watchlistService';
const router = Router();

router.get('/:userId', (req, res) => {
  getWatchlist(req.params.userId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving watchlist.',
      });
    });
});

router.post('/add/:userId/:ticker', (req, res) => {
  addToWatchlist(req.params.userId, req.params.ticker.toUpperCase())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while deleting watchlist.',
      });
    });
});

router.post('/delete/:userId/:ticker', (req, res) => {
  deleteFromWatchlist(
    req.params.userId,
    req.params.ticker.toUpperCase(),
  );
  res.send('deleting!');
});

export default router;
