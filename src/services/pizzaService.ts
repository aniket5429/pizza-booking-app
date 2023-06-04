import { Pizza, PizzaState, Prisma } from '@prisma/client';
import dbClient from './prismaService';
import webSocketService from './socketService';
import { createPizzaRequest } from '../types/pizza';

const nextStatusMap: Record<PizzaState, PizzaState> = {
    OrderRecieved: PizzaState.PreparingDough,
    PreparingDough: PizzaState.DoughPrepared,
    DoughPrepared: PizzaState.AddingToppings,
    AddingToppings: PizzaState.ToppingsAdded,
    ToppingsAdded: PizzaState.Baking,
    Baking: PizzaState.BakingDone,
    BakingDone: PizzaState.Serving,
    Serving: PizzaState.Done,
    Done: PizzaState.Done,
};

const getPizzaFromQueue = async (state: PizzaState): Promise<Pizza> => {
    // get First pizza by state
    const pizza = await dbClient.pizza.findFirstOrThrow({
        where: {
            state,
        },
        orderBy: [{ statusUpdateAt: 'asc' }, { id: 'asc' }],
    });
    const updateCount = await dbClient.pizza.updateMany({
        where: {
            id: pizza.id,
            state,
        },
        data: {
            state: nextStatusMap[state],
            statusUpdateAt: new Date(),
        },
    });
    if (updateCount.count === 0) {
        return getPizzaFromQueue(state);
    }
    return pizza;
};

const updatePizzaState = async (id: number, newState: PizzaState) => {
    console.log('update pizza state', id, newState, new Date());
    const pizza = await dbClient.pizza.update({
        where: { id },
        data: { state: newState, statusUpdateAt: new Date() },
    });
    webSocketService.sendMessage(JSON.stringify(pizza));
};

const finishServingPizza = async (pizza: Pizza) => {
    console.log('finishing up', pizza);
    const finishedAt = new Date();
    const timeTaken = Math.floor(
        (finishedAt.getTime() - pizza.startedAt.getTime()) / 1000,
    );
    console.log('startingDbupdate', timeTaken, finishedAt);
    const finalState = await dbClient.pizza.update({
        where: { id: pizza.id },
        data: {
            state: PizzaState.Done,
            statusUpdateAt: finishedAt,
            finishedAt,
            timeTaken,
        },
    });
    webSocketService.sendMessage(JSON.stringify(finalState));
};

const updateTotalTime = async (timeTaken: number) => {
    const pizza = await dbClient.pizza.update({
        where: { id: 1 },
        data: { timeTaken },
    });
    return pizza;
};

const addPizzas = async (data: createPizzaRequest[]) => {
    const now = new Date();
    const createData = data.map(pizza => {
        return {
            startedAt: now,
            state: PizzaState.OrderRecieved,
            toppings: pizza.toppings,
            statusUpdateAt: now,
        };
    });
    const results: Pizza[] = [];
    for (let data of createData) {
        const pizza = await dbClient.pizza.create({
            data: data,
        });
        results.push(pizza);
    }
    return results;
};

const getAllPizzas = async () => {
    return dbClient.pizza.findMany();
};

export {
    getPizzaFromQueue as getPizzaFromState,
    updatePizzaState,
    finishServingPizza,
    addPizzas,
    getAllPizzas,
    updateTotalTime,
};
