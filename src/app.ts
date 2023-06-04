import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import webSocketService from './services/socketService';
import {
    addPizzas,
    getAllPizzas,
    updateTotalTime,
} from './services/pizzaService';
import startConsumers from './consumers/startConsumers';

const app = express();

app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ strict: false, limit: '10mb' }));

const corsOptions: cors.CorsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));

app.get('/all-pizzas', async (req, res) => {
    res.json({ pizzas: await getAllPizzas() });
});

app.post('/update-time-taken', async (req, res) => {
    const pizza = await updateTotalTime(20.03);
    res.json({ pizza });
});
// assume 404 since no middleware responded
app.use(async (req: Request, res: Response) => {
    // res.status(404).send({ message: 'Resource not found' });
    res.json({ pizzas: getAllPizzas() });
});

const port = process.env.PORT || 3000;

app.set('port', port);

app.listen(app.get('port'), () => {
    console.log(
        'App is running on http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env'),
    );
    webSocketService.startServer();
    startConsumers();
});

export { app };
