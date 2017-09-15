"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var MyMiddleware = (function () {
    function MyMiddleware() {
    }
    MyMiddleware.prototype.use = function (context, next) {
        console.log("do something before execution...");
        return next().then(function () {
            console.log("do something after execution");
        }).catch(function (error) {
            console.log("error handling is also here");
        });
    };
    MyMiddleware = __decorate([
        inversify_1.injectable()
    ], MyMiddleware);
    return MyMiddleware;
}());
exports.MyMiddleware = MyMiddleware;
