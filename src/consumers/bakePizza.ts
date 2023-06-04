import { PizzaState } from '@prisma/client';
import { getPizzaFromState, updatePizzaState } from '../services/pizzaService';
import { Consumer } from '../types/consumers';

export class BakingConsumer implements Consumer {
    public consume = async () => {
        try {
            const pizza = await getPizzaFromState(PizzaState.ToppingsAdded);
            await new Promise(resolve => setTimeout(resolve, 10 * 1000));
            await updatePizzaState(pizza.id, PizzaState.BakingDone);
        } catch (error) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        this.consume();
    };
}
