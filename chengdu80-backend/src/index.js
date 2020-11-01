import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1],
//   };
//   next();
// });

// * Routes * //
app.use('/', routes.root);
app.use('/watchlist', routes.watchlist);
app.use('/transaction', routes.transaction);
app.use('/company', routes.company);

// * Connect to DB * //
const db = require('./db');
db.sequelize.sync();

// * Start * //
app.listen(process.env.PORT, () =>
  console.log(`Backend is alive yay!`),
);
