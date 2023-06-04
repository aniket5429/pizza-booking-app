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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const pizzaService_1 = require("../services/pizzaService");
const servePizza = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pizza = yield (0, pizzaService_1.getPizzaFromState)(client_1.PizzaState.Serving);
        yield new Promise(resolve => setTimeout(resolve, 10 * 1000));
        (0, pizzaService_1.finishServingPizza)(pizza);
    }
    catch (error) {
        console.log('No pizzas for baking');
        yield new Promise(resolve => setTimeout(resolve, 1000));
        servePizza();
    }
});
servePizza();
