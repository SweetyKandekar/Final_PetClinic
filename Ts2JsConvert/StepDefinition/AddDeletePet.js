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
var PetTypes_1 = require("../PageObjects/PetTypes");
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(50 * 1000);
var home = new Home_1.Home();
var petTypes = new PetTypes_1.PetTypes();
cucumber_1.Given('User is on Pet Types page', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, home.navigateToPetTypesPage()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Verify page title', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, petTypes.verifyTitle()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('All the buttons in the page are enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, petTypes.isAddHomeDeleteEditEnable()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Click on add buttons', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, petTypes.clickOnAdd()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Enter the {string} and click on Save button', function (Name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, petTypes.enterName({ Name: Name })];
            case 1:
                _a.sent();
                return [4 /*yield*/, petTypes.clickOnSave()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Count the PetTypes and User should see all the PetTypes', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, petTypes.countAndDisplay()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('click on first delete button page and show the deleted pet Name', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, petTypes.deleteFirstPet()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkRGVsZXRlUGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb24vQWRkRGVsZXRlUGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXlDO0FBQ3pDLDRDQUEyQztBQUMzQyxvREFBbUQ7QUFFN0MsSUFBQSxpQkFBaUIsR0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDLGtCQUF4QixDQUF5QjtBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUNwQixJQUFJLFFBQVEsR0FBQyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUU1QixnQkFBSyxDQUFDLDJCQUEyQixFQUFFOzs7b0JBRS9CLHFCQUFNLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFBOztnQkFBbkMsU0FBbUMsQ0FBQzs7OztLQUVyQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUJBQW1CLEVBQUU7OztvQkFFeEIscUJBQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFBOztnQkFBNUIsU0FBNEIsQ0FBQzs7OztLQUU5QixDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUU7OztvQkFFOUMscUJBQU0sUUFBUSxDQUFDLHlCQUF5QixFQUFFLEVBQUE7O2dCQUExQyxTQUEwQyxDQUFDOzs7O0tBRTVDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzQkFBc0IsRUFBRTs7O29CQUUzQixxQkFBTSxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUE7O2dCQUEzQixTQUEyQixDQUFDOzs7O0tBRTdCLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2Q0FBNkMsRUFBRSxVQUFPLElBQVE7OztvQkFFakUscUJBQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFDLENBQUMsRUFBQTs7Z0JBQWhDLFNBQWdDLENBQUM7Z0JBQ2pDLHFCQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7Z0JBQTVCLFNBQTRCLENBQUM7Ozs7S0FFOUIsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlEQUF5RCxFQUFFOzs7b0JBRTlELHFCQUFNLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7Z0JBQWhDLFNBQWdDLENBQUM7Ozs7S0FFbEMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlFQUFpRSxFQUFFOzs7b0JBRXRFLHFCQUFNLFFBQVEsQ0FBQyxjQUFjLEVBQUUsRUFBQTs7Z0JBQS9CLFNBQStCLENBQUM7Ozs7S0FFakMsQ0FBQyxDQUFDIn0=