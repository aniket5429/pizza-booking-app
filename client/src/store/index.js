import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from 'redux-saga';
import reducers from "../reducers";
// import RootSagas from '../sagas';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { loadReduxData, saveReduxData } from "../utils/storage";
import throttle from "lodash/throttle";

// let sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk];
// const middlewares = [sagaMiddleware];

if (import.meta.env.MODE === "development") {
    const logger = createLogger({
        collapsed: true,
    });
    middlewares.push(logger);
}

const bindMiddleware = () => {
    return applyMiddleware(...middlewares);
};

const persistedState = loadReduxData();

function getStore() {
    let store, composeEnhancer;

    if (import.meta.env.MODE !== "production") {
        composeEnhancer = composeWithDevTools({
            name: `Redux`,
            realtime: true,
            trace: true,
            traceLimit: 25,
        });
    } else {
        composeEnhancer =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    store = createStore(
        reducers,
        persistedState,
        composeEnhancer(bindMiddleware())
    );

    store.subscribe(
        throttle(() => {
            saveReduxData(store.getState());
        }, 1000)
    );

    return store;
}

export default getStore;
