import { PIZZA_TOPPINGS, PIZZA_OPTIONS } from "../constants";

const pizzaPreloadedState = {
    isLoading: false,
    toppings: PIZZA_TOPPINGS,
    pizzaList: PIZZA_OPTIONS,
};

const pizzaReducer = (state = pizzaPreloadedState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default pizzaReducer;
