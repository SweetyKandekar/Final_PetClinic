"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.Home = void 0;
var protractor_1 = require("protractor");
var expect = require('chai').expect;
var log = require('../Logs/Log4JS').file;
var Home = /** @class */ (function () {
    function Home() {
        this.homebtn = protractor_1.element(protractor_1.by.css("a[href='/petclinic/welcome']"));
        this.title = protractor_1.element(protractor_1.by.css("app-welcome h1"));
        this.owners = protractor_1.element(protractor_1.by.css("ul.navbar-nav li.dropdown:nth-child(2)"));
        this.addnewOwner = protractor_1.element(protractor_1.by.css("a[href='/petclinic/owners/add']"));
        this.veterinar = protractor_1.element(protractor_1.by.css("ul.navbar-nav li:nth-child(3)"));
        this.allVeter = protractor_1.element(protractor_1.by.css("a[href='/petclinic/vets/add']"));
        this.petTypesBtn = protractor_1.element(protractor_1.by.css("a[href='/petclinic/pettypes']"));
    }
    Home.prototype.navigateToHomepage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.homebtn.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Home.prototype.titleVerification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.title.getText().then(function (text) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        log.debug(text);
                                        return [4 /*yield*/, log.debug(text)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, expect(text).to.equal("Welcome to Petclinic")];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Home.prototype.navigateToNewOwnerPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.owners.getText()];
                    case 1:
                        name = _a.sent();
                        expect(name).to.equal("OWNERS");
                        return [4 /*yield*/, this.owners.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.addnewOwner.click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Home.prototype.navigateToVeterinaryPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.veterinar.getText()];
                    case 1:
                        name = _a.sent();
                        expect(name).to.equal("VETERINARIANS");
                        return [4 /*yield*/, this.veterinar.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.allVeter.click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Home.prototype.navigateToPetTypesPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.petTypesBtn.getText()];
                    case 1:
                        name = _a.sent();
                        expect(name).to.equal("PET TYPES");
                        return [4 /*yield*/, this.petTypesBtn.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBRSxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUM7QUFDeEMsSUFBTSxHQUFHLEdBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBRXpDO0lBQUE7UUFFYyxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUUxRCxVQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUUxQyxXQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUVuRSxnQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7UUFFakUsY0FBUyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFFNUQsYUFBUSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFFM0QsZ0JBQVcsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0lBMkM1RSxDQUFDO0lBdkNvQixpQ0FBa0IsR0FBL0I7Ozs7NEJBRUUscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQTFCLFNBQTBCLENBQUM7Ozs7O0tBQzVCO0lBRVksZ0NBQWlCLEdBQTlCOzs7Ozs0QkFFRSxxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFNLElBQUk7Ozs7d0NBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7d0NBQ2pCLHFCQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLEVBQUE7O3dDQUF2QixTQUF1QixDQUFDO3dDQUN4QixxQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxFQUFBOzt3Q0FBbkQsU0FBbUQsQ0FBQzs7Ozs2QkFHcEQsQ0FBQyxFQUFBOzt3QkFORixTQU1FLENBQUE7Ozs7O0tBQ0g7SUFFVyxxQ0FBc0IsR0FBbkM7Ozs7OzRCQUdZLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUFoQyxJQUFJLEdBQUMsU0FBMkI7d0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMvQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzt3QkFDMUIscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7Ozs7O0tBQ2xDO0lBRVksdUNBQXdCLEdBQXJDOzs7Ozs0QkFFVSxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBbkMsSUFBSSxHQUFDLFNBQThCO3dCQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQTVCLFNBQTRCLENBQUM7d0JBQzdCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDOzs7OztLQUNoQztJQUVZLHFDQUFzQixHQUFuQzs7Ozs7NEJBRVcscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXJDLElBQUksR0FBQyxTQUFnQzt3QkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ25DLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDOzs7OztLQUNoQztJQUNSLFdBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBekRZLG9CQUFJIn0=