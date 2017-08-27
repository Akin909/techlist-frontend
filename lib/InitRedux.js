"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var redux_1 = require("redux");
var reducers_1 = require("./../reducers");
var Store;
var initState = {
    apollo: undefined
};
var devTools = process["browser"] && window["__REDUX_DEVTOOLS_EXTENSION__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION__"]()
    : function (fn) { return fn; };
function create(apollo, initialState) {
    if (initialState === void 0) { initialState = initState; }
    return redux_1.createStore(redux_1.combineReducers(__assign({}, reducers_1["default"], { apollo: apollo.reducer() })), initialState, //Hydrate sore with server side data
    redux_1.compose(redux_1.applyMiddleware(apollo.middleware()), devTools));
}
function initRedux(apollo, initialState) {
    if (initialState === void 0) { initialState = initState; }
    if (!process["browser"]) {
        return create(apollo, initialState);
    }
    if (!redux_1.Store) {
        redux_1.Store = create(apollo, initialState);
    }
    return redux_1.Store;
}
exports["default"] = initRedux;
