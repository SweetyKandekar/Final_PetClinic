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
var NewVeterinary_1 = require("../PageObjects/NewVeterinary");
var home = new Home_1.Home();
var newVeterinary = new NewVeterinary_1.NewVeterinary();
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(50 * 1000);
cucumber_1.Given('user will Navigate to Petclinic Home page and Verify HomePage Title', function () { return __awaiter(void 0, void 0, void 0, function () {
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
cucumber_1.When('user clicks on VETERINARIANS dropdown and select Add New option', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, home.navigateToVeterinaryPage()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('provide {string} {string}', function (First_Name, Last_Name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newVeterinary.enterFN_LN({ First_Name: First_Name, Last_Name: Last_Name })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('click on Type dropdown and select any option', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newVeterinary.selectSpecialist()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('click on save button', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newVeterinary.saveVet()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// Then('Verify the Newly added Name in Veterinary page', async ()=> {
//    await newVeterinary.verifyNewVetDetails();
//});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVmV0ZXJpbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9uL0FkZFZldGVyaW5hcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBNkM7QUFFN0MsNENBQTJDO0FBQzNDLDhEQUE2RDtBQUM3RCxJQUFJLElBQUksR0FBQyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3BCLElBQUksYUFBYSxHQUFDLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBR2hDLElBQUEsaUJBQWlCLEdBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxrQkFBeEIsQ0FBeUI7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRzdCLGdCQUFLLENBQUMscUVBQXFFLEVBQUU7OztvQkFFM0UscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUE7O2dCQUEvQixTQUErQixDQUFDO2dCQUNoQyxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7Z0JBQTlCLFNBQThCLENBQUM7Ozs7S0FFaEMsQ0FBQyxDQUFDO0FBRUQsZUFBSSxDQUFDLGlFQUFpRSxFQUFFOzs7b0JBRXRFLHFCQUFNLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFBOztnQkFBckMsU0FBcUMsQ0FBQzs7OztLQUV2QyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUUsVUFBTyxVQUFlLEVBQUMsU0FBYzs7O29CQUdyRSxxQkFBTSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsVUFBVSxZQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUMsQ0FBQyxFQUFBOztnQkFBdkQsU0FBdUQsQ0FBQzs7OztLQUV6RCxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsOENBQThDLEVBQUU7OztvQkFFbkQscUJBQU0sYUFBYSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O2dCQUF0QyxTQUFzQyxDQUFDOzs7O0tBRXhDLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxzQkFBc0IsRUFBRTs7O29CQUUzQixxQkFBTSxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUE7O2dCQUE3QixTQUE2QixDQUFDOzs7O0tBRS9CLENBQUMsQ0FBQztBQUVKLHNFQUFzRTtBQUV2RSxnREFBZ0Q7QUFFOUMsS0FBSyJ9