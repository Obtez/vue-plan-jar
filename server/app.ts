import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import connect from './database/db';
import planRoutes from './routes/planRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

connect();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/plans', planRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
