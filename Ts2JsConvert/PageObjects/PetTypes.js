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
exports.PetTypes = void 0;
var protractor_1 = require("protractor");
var log = require('../Logs/Log4JS').file;
var expect = require('chai').expect;
var ec = protractor_1.ExpectedConditions;
var PetTypes = /** @class */ (function () {
    function PetTypes() {
        this.addbtn = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', ' Add '));
        this.homeBtn = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Home'));
        this.title = protractor_1.element(protractor_1.by.css('div .xd-container h2'));
        this.editBtn = protractor_1.element.all(protractor_1.by.cssContainingText('.btn-default', 'Edit')).first();
        this.deleteBtn = protractor_1.element.all(protractor_1.by.cssContainingText('.btn-default', 'Delete')).first();
        this.petName = protractor_1.element(protractor_1.by.css("#name"));
        this.save = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Save'));
        this.firstPet = protractor_1.element.all(protractor_1.by.css('tbody tr td')).first();
        this.table = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
    }
    PetTypes.prototype.verifyTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PetTypes.prototype.isAddHomeDeleteEditEnable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PetTypes.prototype.clickOnAdd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addbtn.click()];
                    case 1:
                        _a.sent();
                        log.debug("Clicked on Add button in Pet Types page");
                        return [2 /*return*/];
                }
            });
        });
    };
    PetTypes.prototype.enterName = function (_a) {
        var Name = _a.Name;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.petName.sendKeys(Name)];
                    case 1:
                        _b.sent();
                        log.debug("Pet name Entered");
                        return [2 /*return*/];
                }
            });
        });
    };
    PetTypes.prototype.clickOnSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.save.isEnabled()];
                    case 1:
                        status = _a.sent();
                        expect(status).to.equal(true);
                        log.debug("save button is Enabled");
                        return [4 /*yield*/, this.save.click()];
                    case 2:
                        _a.sent();
                        log.debug("Clicked on Save button is Enabled");
                        return [2 /*return*/];
                }
            });
        });
    };
    PetTypes.prototype.countAndDisplay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var row, count, i, firstTD, firstdata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        row = this.table.$$("tr");
                        return [4 /*yield*/, row.count()];
                    case 1:
                        count = _a.sent();
                        log.debug("No of pet present-- " + count);
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < count)) return [3 /*break*/, 5];
                        firstTD = row.get(i).$$("td");
                        firstdata = firstTD.get(0);
                        protractor_1.browser.wait(ec.presenceOf(firstdata), 5000);
                        return [4 /*yield*/, firstdata.element(protractor_1.by.name('pettype_name')).getAttribute('value').then(function (title) {
                                log.debug("PetType  ::" + title);
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PetTypes.prototype.deleteFirstPet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return PetTypes;
}());
exports.PetTypes = PetTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGV0VHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9QZXRUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0Y7QUFDcEYsSUFBTSxHQUFHLEdBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFFNUI7SUFBQTtRQUdZLFdBQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU3RCxZQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFN0QsVUFBSyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFFOUMsWUFBTyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV6RSxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTdFLFlBQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVqQyxTQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFDLE1BQU0sQ0FBQyxDQUFD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