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
exports.config = void 0;
var protractor_1 = require("protractor");
var reporter = require('cucumber-html-reporter');
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'firefox',
        'args': ['--safe-mode'],
        'moz:firefoxOptions': {
            args: ["--headless"]
        },
    },
    specs: [
        '../Features/AddVeterinary.feature',
        '../Features/AddDeletePet.feature',
        '../Features/AddOwner.feature'
    ],
    cucumberOpts: {
        strict: true,
        // tags:"@Ownervalidation",
        format: 'json:./cucumberReports.json',
        require: [
            'C:/Users/Lenovo/Desktop/Final_PetCli/Ts2JsConvert/stepDefinition/*.js',
        ]
    },
    onPrepare: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.ignoreSynchronization = false;
                    protractor_1.browser.driver.manage().window().maximize();
                    return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    onComplete: function () {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberReports.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "firefox 87.0",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBMkM7QUFDM0MsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDdEMsUUFBQSxNQUFNLEdBQVc7SUFFeEIsa0RBQWtEO0lBRW5ELGFBQWEsRUFBRSxJQUFJO0lBQ25CLHdCQUF3QixFQUFFLEtBQUs7SUFDOUIsU0FBUyxFQUFFLFFBQVE7SUFHbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFJaEUsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFNBQVM7UUFDdEIsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3ZCLG9CQUFvQixFQUFFO1lBQ3JCLElBQUksRUFBRSxDQUFFLFlBQVksQ0FBRTtTQUN6QjtLQUNGO0lBS0csS0FBSyxFQUFFO1FBQ0wsbUNBQW1DO1FBQ25DLGtDQUFrQztRQUNsQyw4QkFBOEI7S0FFL0I7SUFFRCxZQUFZLEVBQUU7UUFFWixNQUFNLEVBQUUsSUFBSTtRQUNaLDJCQUEyQjtRQUMzQixNQUFNLEVBQUMsNkJBQTZCO1FBRXBDLE9BQU8sRUFBRTtZQUNMLHVFQUF1RTtTQUMxRTtLQUNGO0lBQ0QsU0FBUyxFQUFFOzs7O29CQUdSLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO29CQUVyQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFNUMscUJBQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBQTs7b0JBQTFDLFNBQTBDLENBQUM7Ozs7U0FJNUM7SUFDSCxVQUFVLEVBQUU7UUFFVixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsY0FBYztnQkFDekIsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFDIn0=