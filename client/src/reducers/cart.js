import map from "lodash/map";
import filter from "lodash/filter";
import uniqBy from "lodash/uniqBy";
import actionTypes from "../actions/actionTypes";

const cartPreloadedState = {
    isLoading: false,
    cartList: [],
};

const cartReducer = (state = cartPreloadedState, action) => {
    const { payload } = action;
    switch (action.type) {
        case actionTypes.ADD_PIZZA_TO_CART: {
            const list = uniqBy(
                [...state.cartList, { ...payload, finalPrice: payload.price }],
                "id"
            );
            return {
                ...state,
                cartList: list,
            };
        }

        case actionTypes.REMOVE_PIZZA_FROM_CART:
            return {
                ...state,
                cartList: filter(
                    state.cartList,
                    item => item.id !== payload.pizzaId
                ),
            };
        case actionTypes.UPDATE_PIZZA_IN_CART:
            return {
                ...state,
                cartList: map(state.cartList, item => {
                    return item.id === payload.id ? payload : item;
                }),
            };
        case actionTypes.SUBMIT_ORDER:
            return {
                ...state,
                cartList: [],
            };

        default:
            return state;
    }
};

export default cartReducer;
