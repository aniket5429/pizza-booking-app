import { combineReducers } from "redux";
import cart from "./cart";
import orders from "./orders";
import pizza from "./pizza";

export default combineReducers({
    cart,
    orders,
    pizza,
});
