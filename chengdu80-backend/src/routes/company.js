import { Router } from 'express';
import { getCompanyDetails } from '../services/companyService';
const router = Router();

router.get('/:ticker', (req, res) => {
  getCompanyDetails(req.params.ticker.toUpperCase())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving company details.',
      });
    });
});

export default router;
