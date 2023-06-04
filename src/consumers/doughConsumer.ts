import { PizzaState } from '@prisma/client';
import { getPizzaFromState, updatePizzaState } from '../services/pizzaService';
import { Consumer } from '../types/consumers';
import { toppingsQueue } from './toppingConsumer';

export class DoughConsumer implements Consumer {
    public consume = async () => {
        try {
            const pizza = await getPizzaFromState(PizzaState.OrderRecieved);
            await new Promise(resolve => setTimeout(resolve, 7 * 1000));
            await updatePizzaState(pizza.id, PizzaState.DoughPrepared);
            toppingsQueue.addPizzaToppingsToQueue(pizza);
            toppingsQueue.printQueue();
        } catch (error) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        this.consume();
    };
}
