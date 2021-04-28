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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewVeterinary = void 0;
var protractor_1 = require("protractor");
var Properties_1 = __importDefault(require("../TestData/Properties"));
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
    NewVeterinary.prototype.verifyNewVetDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var veternariDetails, vetName, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(ec.visibilityOf(this.veterinariansTbl), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        veternariDetails = this.veterinariansTbl.all(protractor_1.by.tagName("tr")).last();
                        return [4 /*yield*/, veternariDetails.getText()];
                    case 2:
                        vetName = _a.sent();
                        return [4 /*yield*/, vetName.substr(0, 12)];
                    case 3:
                        res = _a.sent();
                        return [4 /*yield*/, log.debug("Vet details are :- " + res)];
                    case 4:
                        _a.sent();
                        // await expect( vetName ).to.equal( res );
                        return [4 /*yield*/, expect(Properties_1.default.userData.VeterinariData.vetDetails).to.equal(res)];
                    case 5:
                        // await expect( vetName ).to.equal( res );
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return NewVeterinary;
}());
exports.NewVeterinary = NewVeterinary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3VmV0ZXJpbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL05ld1ZldGVyaW5hcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXNFO0FBQ3RFLHNFQUE4QztBQUM5QyxJQUFNLEdBQUcsR0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDekMsSUFBTSxNQUFNLEdBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBQywrQkFBa0IsQ0FBQztBQUcxQjtJQUFBO1FBR1ksY0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRXhDLGFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUV0QyxpQkFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRTdDLGVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBRS9ELFNBQUksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBRTlDLHFCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFpRHBFLENBQUM7SUE5Q2dCLGtDQUFVLEdBQXZCLFVBQXlCLEVBQTJEO1lBQTFELFVBQVUsZ0JBQUEsRUFBRSxTQUFTLGVBQUE7Ozs7NEJBRzNDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBekMsU0FBeUMsQ0FBQzt3QkFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO3dCQUdoRCxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUM7d0JBQ3hDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQzs7Ozs7S0FFbEQ7SUFFWSx3Q0FBZ0IsR0FBN0I7Ozs7NEJBRUkscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTt3QkFDckMsc0JBQXNCO3dCQUNyQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFEOUIsc0JBQXNCO3dCQUNyQixTQUE2QixDQUFDO3dCQUM5QixHQUFHLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Ozs7O0tBRzNDO0lBRVksK0JBQU8sR0FBcEI7Ozs7NEJBRUkscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7d0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7Ozs7S0FDdkM7SUFFWSwyQ0FBbUIsR0FBaEM7Ozs7OzRCQUVJLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFFLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixDQUFFLEVBQUE7O3dCQUFoRyxTQUFnRyxDQUFDO3dCQUM3RixnQkFBZ0IsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFFLGVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFFN0QscUJBQU0sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUExQyxPQUFPLEdBQUcsU0FBZ0M7d0JBQ3JDLHFCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBL0IsR0FBRyxHQUFFLFNBQTBCO3dCQUNuQyxxQkFBTSxHQUFHLENBQUMsS0FBSyxDQUFFLHFCQUFxQixHQUFHLEdBQUcsQ0FBRSxFQUFBOzt3QkFBOUMsU0FBOEMsQ0FBQzt3QkFDaEQsMkNBQTJDO3dCQUMxQyxxQkFBTSxNQUFNLENBQUUsb0JBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFLEVBQUE7O3dCQUQ1RSwyQ0FBMkM7d0JBQzFDLFNBQTJFLENBQUM7Ozs7O0tBRy9FO0lBR0wsb0JBQUM7QUFBRCxDQUFDLEFBOURELElBOERDO0FBOURZLHNDQUFhIn0=