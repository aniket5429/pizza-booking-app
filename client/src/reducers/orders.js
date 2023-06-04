import actionTypes from "../actions/actionTypes";

const locationPreloadedState = {
    isLoading: false,
    orderList: {},
};

const orderReducer = (state = locationPreloadedState, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_ORDER:
            return {
                ...state,
                orderList: {
                    ...state.orderList,
                    [action.orderId]: {
                        orderId: action.orderId,
                        pizzas: action.payload,
                    },
                },
            };
        case actionTypes.UPDATE_ORDER:
            return {
                ...state,
                orderList: {
                    ...state.orderList,
                    [action.orderId]: {
                        ...action.payload,
                    },
                },
            };

        default:
            return state;
    }
};

export default orderReducer;
