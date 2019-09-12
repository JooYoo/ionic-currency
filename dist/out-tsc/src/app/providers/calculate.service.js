import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CurrencyService } from './currency.service';
var CalculateService = /** @class */ (function () {
    function CalculateService(currencyService) {
        this.currencyService = currencyService;
        this.digits = '';
        this.result = '';
    }
    CalculateService.prototype.getSelectId = function (id) {
        if (id) {
            this.currentCurrency = this.currencyService.allCurrencys[id];
        }
        else {
            this.currentCurrency = this.currencyService.allCurrencys[0];
        }
    };
    CalculateService.prototype.setDigit = function (digit) {
        this.digits += digit;
        this.currentCurrency.kpInput = this.digits;
        console.log("all Currency: " + this.currencyService.allCurrencys);
    };
    CalculateService.prototype.setResult = function () {
        this.currentCurrency.kpResult = this.calculateKbInput(this.digits);
    };
    CalculateService.prototype.clearDigit = function () {
        this.currentCurrency.kpInput = '';
        this.currentCurrency.kpResult = '1';
    };
    CalculateService.prototype.calculateKbInput = function (kbInputs) {
        try {
            var kbResult = eval(kbInputs);
            return kbResult;
        }
        catch (error) {
            console.warn('equation is not finished.');
            return this.result;
        }
    };
    CalculateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [CurrencyService])
    ], CalculateService);
    return CalculateService;
}());
export { CalculateService };
//# sourceMappingURL=calculate.service.js.map