import express from 'express';
import cors from 'cors';

import { healthRouter } from './routes/index.js';

export const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'diverge-backend' });
});

app.use('/api', healthRouter);
