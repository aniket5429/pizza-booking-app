import isEqual from "lodash/isEqual";
import flatMap from "lodash/flatMap";
import find from "lodash/find";
import merge from "lodash/merge";
import toString from "lodash/toString";

function generateUUID() {
    let uuid = "",
        i,
        random;

    for (i = 0; i < 32; i++) {
        random = (Math.random() * 16) | 0;

        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += "-";
        }

        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
            16
        );
    }

    return uuid;
}

const doesPizzaExist = (pizzaList, pizza) => {
    const samePizzaz = pizzaList.filter(item => item.id === pizza.id);
    return samePizzaz.some(item => isEqual(item.toppings, pizza.toppings));
};

const getPayloadForOrder = pizzaList => {
    return pizzaList.map(pizza => ({
        toppings: flatMap(pizza.toppings, "value"),
    }));
};

const isPizzaToppingsSame = (option1, option2) => {
    return isEqual(option1.sort(), option2.sort());
};

const getUpdatedOrderDetails = (currentOrder, response) => {
    console.log("getUpdatedOrderDetails , currentOrder", currentOrder);
    console.log("response", response);
    const pizzaList = currentOrder.pizzas.map(orderedPizza => {
        let orderedItem = {};
        const currentToppings = flatMap(orderedPizza.toppings, "value");

        if (Array.isArray(response)) {
            orderedItem = find(response, item => {
                return isPizzaToppingsSame(item.toppings, currentToppings);
            });
        } else if (isPizzaToppingsSame(response.toppings, currentToppings)) {
            orderedItem = response;
        }
        if (orderedItem) {
            return {
                ...orderedPizza,
                ...orderedItem,
                toppings: orderedPizza.toppings,
                id: toString(orderedItem?.id ?? orderedPizza.id),
            };
        }
        return { ...orderedPizza };
    });
    return {
        pizzas: pizzaList,
        orderId: currentOrder.orderId,
    };
};

function convertSecondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
        remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes} Mins: ${formattedSeconds}secs`;
}

export {
    generateUUID,
    doesPizzaExist,
    getPayloadForOrder,
    getUpdatedOrderDetails,
    convertSecondsToMinutesAndSeconds,
};
