import { Consumer } from '../types/consumers';
import { BakingConsumer } from './bakePizza';
import { DoughConsumer } from './doughConsumer';
import { ServingConsumer } from './servePizza';
import { ToppingConsumer } from './toppingConsumer';

const startConsumers = () => {
    const consumers: Consumer[] = [];
    for (let i = 0; i < 2; i++) {
        consumers.push(new DoughConsumer());
    }
    for (let i = 0; i < 6; i++) {
        consumers.push(new ToppingConsumer());
    }
    for (let i = 0; i < 1; i++) {
        consumers.push(new BakingConsumer());
    }
    for (let i = 0; i < 2; i++) {
        consumers.push(new ServingConsumer());
    }

    consumers.forEach(consumer => consumer.consume());
    console.log(consumers);
};

export default startConsumers;
