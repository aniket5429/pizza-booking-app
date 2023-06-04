import { PizzaState } from '@prisma/client';
import {
    finishServingPizza,
    getPizzaFromState,
    updatePizzaState,
} from '../services/pizzaService';
import { Consumer } from '../types/consumers';

export class ServingConsumer implements Consumer {
    public consume = async () => {
        try {
            const pizza = await getPizzaFromState(PizzaState.BakingDone);
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            console.log('serving done', pizza);
            await finishServingPizza(pizza);
        } catch (error) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        this.consume();
    };
}
