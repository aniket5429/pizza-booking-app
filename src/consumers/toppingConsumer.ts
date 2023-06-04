import { Pizza, PizzaState } from '@prisma/client';
import { getPizzaFromState, updatePizzaState } from '../services/pizzaService';
import { Consumer } from '../types/consumers';

type QueueEntry = {
    id: number;
    topping: string;
    isLast: boolean;
};

class ToppingsQueue {
    private queue: QueueEntry[] = [];
    public addPizzaToppingsToQueue = (pizza: Pizza) => {
        const entries: QueueEntry[] = pizza.toppings.map(topping => {
            return {
                id: pizza.id,
                topping,
                isLast: false,
            };
        });
        entries[entries.length - 1].isLast = true;
        this.queue = this.queue.concat(entries);
        console.log(this.queue);
    };
    public getTopping = (): QueueEntry | undefined => {
        return this.queue.shift();
    };
    public printQueue = () => {
        console.log(this.queue);
    };
}

export const toppingsQueue = new ToppingsQueue();

export class ToppingConsumer implements Consumer {
    queue: QueueEntry[] = [];

    public consume = async () => {
        const entry = toppingsQueue.getTopping();
        if (entry === undefined) {
            await new Promise(resolve => setTimeout(resolve, 1 * 1000));
        } else {
            await new Promise(resolve => setTimeout(resolve, 4 * 1000));
            if (entry.isLast) {
                await updatePizzaState(entry.id, PizzaState.ToppingsAdded);
            }
        }
        this.consume();
    };
}
