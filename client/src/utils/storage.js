export const saveReduxData = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("redux_data", serializedState);
    } catch (err) {
        return undefined;
    }
};

export const loadReduxData = () => {
    try {
        const serializedState = localStorage.getItem("redux_data");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
