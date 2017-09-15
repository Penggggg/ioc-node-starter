"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var UserCtrl_1 = require("./UserCtrl");
var emtities_1 = require("./emtities");
var middlewares_1 = require("./middlewares");
exports.con = new inversify_1.Container();
exports.con.bind(emtities_1.Util).toSelf();
exports.con.bind(UserCtrl_1.UserCtrl).toSelf();
exports.con.bind(middlewares_1.MyMiddleware).toSelf();