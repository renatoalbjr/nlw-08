import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.listen('3333', () => {
    console.log("Listening on port 3333");
});

app.use(routes);