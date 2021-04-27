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
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.title.getText().then(function (txt) {
                            log.debug(txt);
                            expect(txt).to.equal('Pet Types');
                            log.debug("Pet Types page title is verified");
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PetTypes.prototype.isAddHomeDeleteEditEnable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, status1, status2, status3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addbtn.isEnabled()];
                    case 1:
                        status = _a.sent();
                        expect(status).to.equal(true);
                        log.debug("Add button is enabled in Pet Types page");
                        return [4 /*yield*/, this.homeBtn.isEnabled()];
                    case 2:
                        status1 = _a.sent();
                        expect(status1).to.equal(true);
                        log.debug("Home button is Enabled in Pet Types page");
                        return [4 /*yield*/, this.editBtn.isEnabled()];
                    case 3:
                        status2 = _a.sent();
                        expect(status2).to.equal(true);
                        log.debug("Edit button is Enabled in Pet Types page");
                        return [4 /*yield*/, this.deleteBtn.isEnabled()];
                    case 4:
                        status3 = _a.sent();
                        expect(status3).to.equal(true);
                        log.debug("Delete button is Enabled in Pet Types page");
                        return [2 /*return*/];
                }
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
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firstPet.element(protractor_1.by.name('pettype_name')).getAttribute('value').then(function (petName) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        log.debug("Deleted PetType Name is ::" + petName);
                                        return [4 /*yield*/, this.deleteBtn.click()];
                                    case 1:
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
    return PetTypes;
}());
exports.PetTypes = PetTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGV0VHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9QZXRUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0Y7QUFDcEYsSUFBTSxHQUFHLEdBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFFNUI7SUFBQTtRQUdZLFdBQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU3RCxZQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFN0QsVUFBSyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFFOUMsWUFBTyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV6RSxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTdFLFlBQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVqQyxTQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFDLE1BQU0sQ0FBQyxDQUFD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