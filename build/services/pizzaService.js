"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPizzas = exports.finishServingPizza = exports.updatePizzaState = exports.getPizzaFromState = void 0;
const client_1 = require("@prisma/client");
const prismaService_1 = __importDefault(require("./prismaService"));
const getPizzaFromState = (state) => {
    // get First pizza by state
    return prismaService_1.default.pizza.findFirstOrThrow({
        where: {
            state,
        },
        orderBy: [{ statusUpdateAt: 'asc' }],
    });
};
exports.getPizzaFromState = getPizzaFromState;
const updatePizzaState = (id, newState) => {
    return prismaService_1.default.pizza.update({
        where: { id },
        data: { state: newState, statusUpdateAt: new Date() },
    });
};
exports.updatePizzaState = updatePizzaState;
const finishServingPizza = (pizza) => {
    const finishedAt = new Date();
    const timeTaken = finishedAt.getTime() - pizza.startedAt.getTime();
    prismaService_1.default.pizza.update({
        where: { id: pizza.id },
        data: {
            state: client_1.PizzaState.Done,
            finishedAt,
            timeTaken,
            statusUpdateAt: finishedAt,
        },
    });
};
exports.finishServingPizza = finishServingPizza;
const addPizzas = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('adding pizzas', data);
    const now = new Date();
    const createData = data.map(pizza => {
        return {
            startedAt: now,
            state: client_1.PizzaState.DoughChef,
            toppings: pizza.toppings,
            statusUpdateAt: now,
        };
    });
    const results = [];
    for (let data of createData) {
        const pizza = yield prismaService_1.default.pizza.create({
            data: data,
        });
        results.push(pizza);
    }
    return results;
});
exports.addPizzas = addPizzas;
