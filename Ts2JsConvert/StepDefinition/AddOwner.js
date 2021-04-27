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
var cucumber_1 = require("cucumber");
var Home_1 = require("../PageObjects/Home");
var NewOwner_1 = require("../PageObjects/NewOwner");
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(50 * 1000);
var home = new Home_1.Home();
var newOwner = new NewOwner_1.NewOwner();
cucumber_1.Given('user Navigate to Petclinic Home page and Verify HomePage Title', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, home.navigateToHomepage()];
            case 1:
                _a.sent();
                return [4 /*yield*/, home.titleVerification()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('user Clicks on OWNERS dropdown select Add New option from owners dropdown', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, home.navigateToNewOwnerPage()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('verify Title', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newOwner.verifyTitle()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('provide vaild owner details as {string} {string} {string} {string} {string}', function (First_Name, Last_Name, Address, City, Telephone) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newOwner.addNewOwnerDetails({ First_Name: First_Name, Last_Name: Last_Name, Address: Address, City: City, Telephone: Telephone })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('click on Add Owner', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newOwner.clickOnAddOwner()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('verify whether user is successfull added new owner or not', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newOwner.verifyOwnersEntry()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('also check Back button in New Owner page', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, home.navigateToNewOwnerPage()];
            case 1:
                _a.sent();
                return [4 /*yield*/, newOwner.backButton()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkT3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9BZGRPd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2QztBQUU3Qyw0Q0FBMkM7QUFDM0Msb0RBQW1EO0FBSTdDLElBQUEsaUJBQWlCLEdBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxrQkFBeEIsQ0FBeUI7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksSUFBSSxHQUFDLElBQUksV0FBSSxFQUFFLENBQUM7QUFDcEIsSUFBSSxRQUFRLEdBQUMsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFHNUIsZ0JBQUssQ0FBQyxnRUFBZ0UsRUFBRTs7O29CQUN4RSxxQkFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBQTs7Z0JBQS9CLFNBQStCLENBQUM7Z0JBQ2hDLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOztnQkFBOUIsU0FBOEIsQ0FBQzs7OztLQUU5QixDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsMkVBQTJFLEVBQUU7OztvQkFFOUUscUJBQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUE7O2dCQUFuQyxTQUFtQyxDQUFDOzs7O0tBRXJDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxjQUFjLEVBQUU7OztvQkFDbkIscUJBQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFBOztnQkFBNUIsU0FBNEIsQ0FBQzs7OztLQUM5QixDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsNkVBQTZFLEVBQUUsVUFBTyxVQUFlLEVBQUUsU0FBYyxFQUFFLE9BQVksRUFBRSxJQUFTLEVBQUUsU0FBYzs7O29CQUVqSyxxQkFBTSxRQUFRLENBQUMsa0JBQWtCLENBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFFLEVBQUE7O2dCQUF4RixTQUF3RixDQUFDOzs7O0tBRTFGLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQkFBb0IsRUFBRTs7O29CQUV6QixxQkFBTSxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUE7O2dCQUFoQyxTQUFnQyxDQUFDOzs7O0tBRWxDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyREFBMkQsRUFBRTs7O29CQUVoRSxxQkFBTSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7Z0JBQWxDLFNBQWtDLENBQUM7Ozs7S0FFcEMsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDBDQUEwQyxFQUFFOzs7b0JBRS9DLHFCQUFNLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFBOztnQkFBbkMsU0FBbUMsQ0FBQztnQkFDcEMscUJBQU0sUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFBOztnQkFBM0IsU0FBMkIsQ0FBQzs7OztLQUU3QixDQUFDLENBQUMifQ==