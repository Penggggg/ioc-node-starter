"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var emtities_1 = require("./emtities");
var middlewares_1 = require("./middlewares");
var routing_controllers_1 = require("routing-controllers");
var decorator_1 = require("./decorator");
var User = (function () {
    function User() {
    }
    return User;
}());
var UserCtrl = (function () {
    function UserCtrl(util) {
        this.util = util;
    }
    UserCtrl.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sleep(1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "hahah"];
                }
            });
        });
    };
    UserCtrl.prototype.getOne = function (id, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // await request.get('localhost:4000');
                // throw new NotFoundError('没找到');
                console.log(name);
                this.util.sayHello();
                return [2 /*return*/, "This action returns user @" + id + " "];
            });
        });
    };
    UserCtrl.prototype.post = function (user, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(name);
                console.log(user);
                return [2 /*return*/, 'Saving user... '];
            });
        });
    };
    UserCtrl.prototype.put = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, "Updating a user..." + id + " "];
            });
        });
    };
    UserCtrl.prototype.remove = function (id, ctx, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log( ctx.hzp )
                console.log(user);
                return [2 /*return*/, "Removing user "];
            });
        });
    };
    __decorate([
        routing_controllers_1.Get('/'),
        routing_controllers_1.Authorized(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UserCtrl.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get('/:id'),
        __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.QueryParam("name", { required: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", Promise)
    ], UserCtrl.prototype, "getOne", null);
    __decorate([
        routing_controllers_1.Post('/'),
        __param(0, routing_controllers_1.Body({ validate: true })), __param(1, routing_controllers_1.BodyParam('name')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [User, String]),
        __metadata("design:returntype", Promise)
    ], UserCtrl.prototype, "post", null);
    __decorate([
        routing_controllers_1.Put('/:id'),
        __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", Promise)
    ], UserCtrl.prototype, "put", null);
    __decorate([
        routing_controllers_1.Delete('/:id'),
        __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Ctx()), __param(2, decorator_1.UserFromSession({})),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserCtrl.prototype, "remove", null);
    UserCtrl = __decorate([
        routing_controllers_1.UseBefore(middlewares_1.MyMiddleware),
        routing_controllers_1.JsonController('/users'),
        inversify_1.injectable(),
        __param(0, inversify_1.inject(emtities_1.Util)),
        __metadata("design:paramtypes", [emtities_1.Util])
    ], UserCtrl);
    return UserCtrl;
}());
exports.UserCtrl = UserCtrl;
function sleep(time) {
    return new Promise(function (ok, noOK) {
        setTimeout(function () {
            console.log('ok');
            ok();
        }, time);
    });
}
