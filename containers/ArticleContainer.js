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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var react_apollo_1 = require("react-apollo");
var query = (_a = ["\n    query($id: String!) {\n        getStartupById(id: $id) {\n            name\n            category\n        }\n    }\n"], _a.raw = ["\n    query($id: String!) {\n        getStartupById(id: $id) {\n            name\n            category\n        }\n    }\n"], react_apollo_1.gql(_a));
var ArticleContainer = (function (_super) {
    __extends(ArticleContainer, _super);
    function ArticleContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArticleContainer.prototype.render = function () {
        return (<h2>
                {this.props.article}
            </h2>);
    };
    return ArticleContainer;
}(react_1.Component));
ArticleContainer = __decorate([
    react_apollo_1.graphql(query, {
        options: function (_a) {
            var id = _a.id;
            return ({
                variable: { id: id }
            });
        }
    })
], ArticleContainer);
exports["default"] = ArticleContainer;
var _a;
