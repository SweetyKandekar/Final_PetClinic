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
exports.NewOwner = void 0;
var protractor_1 = require("protractor");
var ec = protractor_1.ExpectedConditions;
var expect = require('chai').expect;
var Properties_1 = __importDefault(require("../TestData/Properties"));
var log = require('C:/Users/Lenovo/Desktop/Final_PetCli/Logs/Log4JS').file;
var NewOwner = /** @class */ (function () {
    function NewOwner() {
        this.title = protractor_1.element(protractor_1.by.css("div.xd-container h2"));
        this.firstName = protractor_1.element(protractor_1.by.id("firstName"));
        this.lastName = protractor_1.element(protractor_1.by.id("lastName"));
        this.address = protractor_1.element(protractor_1.by.id("address"));
        this.city = protractor_1.element(protractor_1.by.id("city"));
        this.telePhone = protractor_1.element(protractor_1.by.id("telephone"));
        this.addOwnerButton = protractor_1.element(protractor_1.by.buttonText("Add Owner"));
        this.backBtn = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Back'));
        this.ownerListTbl = protractor_1.element(protractor_1.by.css('table.table-striped tbody'));
    }
    NewOwner.prototype.verifyTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.title.getText().then(function (txt) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                expect(txt).to.equal("New Owner");
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewOwner.prototype.addNewOwnerDetails = function (_a) {
        var First_Name = _a.First_Name, Last_Name = _a.Last_Name, Address = _a.Address, City = _a.City, Telephone = _a.Telephone;
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.addOwnerButton.isEnabled()];
                    case 1:
                        status = _b.sent();
                        expect(status).to.equal(false);
                        log.debug("AddOwner Button Disabled");
                        return [4 /*yield*/, this.firstName.sendKeys(First_Name)];
                    case 2:
                        _b.sent();
                        expect(First_Name).to.have.lengthOf.above(2);
                        log.debug("First Name length is greater than 2 ");
                        return [4 /*yield*/, this.lastName.sendKeys(Last_Name)];
                    case 3:
                        _b.sent();
                        expect(Last_Name).to.have.lengthOf.above(2);
                        log.debug("Last Name length is greater than 2 ");
                        return [4 /*yield*/, this.address.sendKeys(Address)];
                    case 4:
                        _b.sent();
                        expect(Address).to.have.lengthOf.above(2);
                        log.debug("Address length is greater than 2 ");
                        return [4 /*yield*/, this.city.sendKeys(City)];
                    case 5:
                        _b.sent();
                        expect(City).to.have.lengthOf.above(2);
                        log.debug("City length is greater than 2");
                        return [4 /*yield*/, this.telePhone.sendKeys(Telephone)];
                    case 6:
                        _b.sent();
                        expect(Telephone).to.have.lengthOf.above(2);
                        log.debug("Telephone length is greater than 2");
                        return [2 /*return*/];
                }
            });
        });
    };
    NewOwner.prototype.backButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.backBtn.click()];
                    case 1:
                        _a.sent();
                        log.debug("Clicked on Back button");
                        return [2 /*return*/];
                }
            });
        });
    };
    NewOwner.prototype.clickOnAddOwner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addOwnerButton.isEnabled()];
                    case 1:
                        status = _a.sent();
                        expect(status).to.equal(true);
                        log.debug("AddOwner Button is Enabled");
                        return [4 /*yield*/, this.addOwnerButton.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewOwner.prototype.verifyOwnersEntry = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ownerDetails, ownerName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(ec.visibilityOf(this.ownerListTbl), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        ownerDetails = this.ownerListTbl.all(protractor_1.by.tagName("tr")).last();
                        return [4 /*yield*/, ownerDetails.getText()];
                    case 2:
                        ownerName = _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(ec.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM')];
                    case 3:
                        _a.sent();
                        log.debug("Owner details are :- " + ownerName);
                        return [4 /*yield*/, expect(Properties_1.default.userData.OwnerData.ownerDetails).to.equal(ownerName)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return NewOwner;
}());
exports.NewOwner = NewOwner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9OZXdPd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBc0U7QUFDdEUsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFFLE1BQU0sQ0FBRSxDQUFDLE1BQU0sQ0FBQztBQUN4QyxzRUFBNkM7QUFDN0MsSUFBTSxHQUFHLEdBQUMsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsSUFBSSxDQUFDO0FBRTNFO0lBQUE7UUFFWSxVQUFLLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUU5QyxjQUFTLEdBQUcsb0JBQU8sQ0FBRSxlQUFFLENBQUMsRUFBRSxDQUFFLFdBQVcsQ0FBRSxDQUFFLENBQUM7UUFFNUMsYUFBUSxHQUFHLG9CQUFPLENBQUUsZUFBRSxDQUFDLEVBQUUsQ0FBRSxVQUFVLENBQUUsQ0FBRSxDQUFDO1FBRTFDLFlBQU8sR0FBRyxvQkFBTyxDQUFFLGVBQUUsQ0FBQyxFQUFFLENBQUUsU0FBUyxDQUFFLENBQUUsQ0FBQztRQUV4QyxTQUFJLEdBQUcsb0JBQU8sQ0FBRSxlQUFFLENBQUMsRUFBRSxDQUFFLE1BQU0sQ0FBRSxDQUFFLENBQUM7UUFFbEMsY0FBUyxHQUFHLG9CQUFPLENBQUUsZUFBRSxDQUFDLEVBQUUsQ0FBRSxXQUFXLENBQUUsQ0FBRSxDQUFDO1FBRTVDLG1CQUFjLEdBQUcsb0JBQU8sQ0FBRSxlQUFFLENBQUMsVUFBVSxDQUFFLFdBQVcsQ0FBRSxDQUFFLENBQUM7UUFFekQsWUFBTyxHQUFFLG9CQUFPLENBQUUsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRS9ELGlC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