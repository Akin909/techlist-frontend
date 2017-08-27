import { Store, createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ApolloClient } from "react-apollo";
import reducers from "./../reducers";

let Store: Store<IinitialState>;

interface IinitialState {
    apollo?: {
        data?: any;
    };
}

const initState = {
    apollo: undefined,
};

const devTools =
    process["browser"] && window["__REDUX_DEVTOOLS_EXTENSION__"]
        ? window["__REDUX_DEVTOOLS_EXTENSION__"]()
        : (fn: any) => fn;

function create(apollo: ApolloClient, initialState: IinitialState = initState) {
    return createStore(
        combineReducers({
            ...reducers,
            apollo: apollo.reducer(),
        }),
        initialState, //Hydrate sore with server side data
        compose(applyMiddleware(apollo.middleware()), devTools),
    );
}

export default function initRedux(
    apollo: ApolloClient,
    initialState: IinitialState = initState,
): Store<IinitialState> {
    if (!process["browser"]) {
        return create(apollo, initialState);
    }
    if (!Store) {
        Store = create(apollo, initialState);
    }
    return Store;
}
