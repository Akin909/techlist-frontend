"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_apollo_1 = require("react-apollo");
var head_1 = require("next/head");
var InitRedux_1 = require("./InitRedux");
var InitApollo_1 = require("./InitApollo");
function getComponentDisplayName(Component) {
    return Component.displayName || Component.name || "Unknown";
}
exports["default"] = function (ComposedComponent) {
    return _a = (function (_super) {
            __extends(WithData, _super);
            function WithData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.apollo = InitApollo_1["default"]();
                _this.redux = InitRedux_1["default"](_this.apollo, _this.props.serverState);
                return _this;
            }
            WithData.getInitialProps = function (ctx) {
                return __awaiter(this, void 0, void 0, function () {
                    var serverState, composedInitialProps, apollo, redux, url, error_1, state;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                serverState = {};
                                composedInitialProps = {};
                                if (!ComposedComponent.getInitialProps) return [3 /*break*/, 2];
                                return [4 /*yield*/, ComposedComponent.getInitialProps(ctx)];
                            case 1:
                                composedInitialProps = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!!process["browser"]) return [3 /*break*/, 7];
                                apollo = InitApollo_1["default"]();
                                redux = InitRedux_1["default"](apollo);
                                url = { query: ctx.query, pathname: ctx.pathname };
                                _a.label = 3;
                            case 3:
                                _a.trys.push([3, 5, , 6]);
                                return [4 /*yield*/, react_apollo_1.getDataFromTree(<react_apollo_1.ApolloProvider client={apollo} store={redux}>
                            <ComposedComponent url={url} {...composedInitialProps}/>
                        </react_apollo_1.ApolloProvider>)];
                            case 4:
                                _a.sent();
                                return [3 /*break*/, 6];
                            case 5:
                                error_1 = _a.sent();
                                //Error handling
                                console.warn("Apollo Error: ", error_1);
                                return [2 /*return*/, error_1];
                            case 6:
                                head_1["default"].rewind();
                                state = redux.getState();
                                serverState = {
                                    apollo: {
                                        data: state.apollo.data
                                    }
                                };
                                _a.label = 7;
                            case 7: return [2 /*return*/, __assign({ serverState: serverState }, composedInitialProps)];
                        }
                    });
                });
            };
            WithData.prototype.render = function () {
                return (<react_apollo_1.ApolloProvider client={this.apollo} store={this.redux}>
                    <ComposedComponent {...this.props}/>
                </react_apollo_1.ApolloProvider>);
            };
            return WithData;
        }(react_1.Component)),
        _a.displayName = "WithData(" + getComponentDisplayName(ComposedComponent) + ")",
        _a;
    var _a;
};
