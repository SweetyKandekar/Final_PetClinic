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
exports.NewVeterinary = void 0;
var protractor_1 = require("protractor");
var log = require('../Logs/Log4JS').file;
var expect = require('chai').expect;
var ec = protractor_1.ExpectedConditions;
var NewVeterinary = /** @class */ (function () {
    function NewVeterinary() {
        this.firstname = protractor_1.element(protractor_1.by.css("#firstName"));
        this.lastname = protractor_1.element(protractor_1.by.css("#lastName"));
        this.typeDropdown = protractor_1.element(protractor_1.by.css("#specialties"));
        this.selectType = protractor_1.element(protractor_1.by.css("#specialties option:nth-child(2)"));
        this.save = protractor_1.element(protractor_1.by.css("button[type='submit']"));
        this.veterinariansTbl = protractor_1.element(protractor_1.by.css("table.table-striped"));
    }
    NewVeterinary.prototype.enterFN_LN = function (_a) {
        var First_Name = _a.First_Name, Last_Name = _a.Last_Name;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.firstname.sendKeys(First_Name)];
                    case 1:
                        _b.sent();
                        expect(First_Name).to.have.lengthOf.above(2);
                        log.debug("FirstName length is greater than 2");
                        return [4 /*yield*/, this.lastname.sendKeys(Last_Name)];
                    case 2:
                        _b.sent();
                        expect(Last_Name).to.have.lengthOf.above(2);
                        log.debug("LastName length is greater than 2");
                        return [2 /*return*/];
                }
            });
        });
    };
    NewVeterinary.prototype.selectSpecialist = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.typeDropdown.click()];
                    case 1:
                        _a.sent();
                        log.debug("clicked on TypeDropdown");
                        // Thread.sleep(2000);
                        return [4 /*yield*/, this.selectType.click()];
                    case 2:
                        // Thread.sleep(2000);
                        _a.sent();
                        log.debug("Selected a Specialist type");
                        return [2 /*return*/];
                }
            });
        });
    };
    NewVeterinary.prototype.saveVet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.save.click()];
                    case 1:
                        _a.sent();
                        log.debug("Clicked on save button");
                        return [2 /*return*/];
                }
            });
        });
    };
    return NewVeterinary;
}());
exports.NewVeterinary = NewVeterinary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3VmV0ZXJpbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL05ld1ZldGVyaW5hcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXNFO0FBRXRFLElBQU0sR0FBRyxHQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFDLCtCQUFrQixDQUFDO0FBRzFCO0lBQUE7UUFHWSxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFeEMsYUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXRDLGlCQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFN0MsZUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFFL0QsU0FBSSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFFOUMscUJBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQW9DcEUsQ0FBQztJQWpDZ0Isa0NBQVUsR0FBdkIsVUFBeUIsRUFBMkQ7WUFBMUQsVUFBVSxnQkFBQSxFQUFFLFNBQVMsZUFBQTs7Ozs0QkFHM0MscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUF6QyxTQUF5QyxDQUFDO3dCQUMxQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxHQUFHLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7d0JBR2hELHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQzt3QkFDeEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDOzs7OztLQUVsRDtJQUVZLHdDQUFnQixHQUE3Qjs7Ozs0QkFFSSxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO3dCQUNyQyxzQkFBc0I7d0JBQ3JCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUQ5QixzQkFBc0I7d0JBQ3JCLFNBQTZCLENBQUM7d0JBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7Ozs7S0FHM0M7SUFFWSwrQkFBTyxHQUFwQjs7Ozs0QkFFSSxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzt3QkFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzs7OztLQUN2QztJQUlMLG9CQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQztBQWpEWSxzQ0FBYSJ9