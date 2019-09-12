import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var CurrencyService = /** @class */ (function () {
    function CurrencyService() {
        this.allCurrencys = [
            {
                id: 0,
                text: "CYN",
                value: 1,
                kpInput: '',
                kpResult: '0'
            },
            {
                id: 1,
                text: "EUR",
                value: 1,
                kpInput: '',
                kpResult: '1'
            },
            {
                id: 2,
                text: "USD",
                value: 1,
                kpInput: '',
                kpResult: '2'
            },
            {
                id: 3,
                text: "JPY",
                value: 1,
                kpInput: '',
                kpResult: '3'
            }
        ];
    }
    CurrencyService.prototype.getAllCurrencys = function () {
        return [
            {
                id: 0,
                text: "CYN",
                value: 1,
                kpInput: '',
                kpResult: '0'
            },
            {
                id: 1,
                text: "EUR",
                value: 1,
                kpInput: '',
                kpResult: '1'
            },
            {
                id: 2,
                text: "USD",
                value: 1,
                kpInput: '',
                kpResult: '2'
            },
            {
                id: 3,
                text: "JPY",
                value: 1,
                kpInput: '',
                kpResult: '3'
            }
        ];
    };
    CurrencyService.prototype.displayCurrencys = function () {
        return [
            this.allCurrencys[0],
            this.allCurrencys[1],
            this.allCurrencys[2]
        ];
    };
    CurrencyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CurrencyService);
    return CurrencyService;
}());
export { CurrencyService };
//# sourceMappingURL=currency.service.js.map