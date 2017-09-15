"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Koa = require("koa");
var path = require("path");
var KoaLog = require("koa-logs-full");
var routing_controllers_1 = require("routing-controllers");
var UserCtrl_1 = require("./UserCtrl");
var con_1 = require("./con");
var app = new Koa();
app
    .use(test)
    .use(errHandler)
    .use(KoaLog(app, {
    logdir: path.join(__dirname, 'logs')
}));
routing_controllers_1.useContainer(con_1.con);
routing_controllers_1.useKoaServer(app, {
    defaults: {
        paramOptions: {
            required: true
        }
    },
    authorizationChecker: authorizationChecker,
    routePrefix: '/api',
    controllers: [UserCtrl_1.UserCtrl]
    // controllers: [ con.get< UserCtrl >( TYPES.UserCtrl ) ]
});
app.listen(4000);
console.log("app is listening in 4000");
function test(ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Object.assign(ctx, { hzp: 123 });
                    return [4 /*yield*/, next()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function errHandler(ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, next()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    // 自定义错误类型区分，如权限错误等
                    return [2 /*return*/, ctx.body = {
                            msg: 'error'
                        }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function authorizationChecker(action, roles) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('i am authorizationChecker');
                    return [4 /*yield*/, sleep(1000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
function sleep(time) {
    return new Promise(function (ok, noOK) {
        setTimeout(function () {
            ok();
        }, time);
    });
}
