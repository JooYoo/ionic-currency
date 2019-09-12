import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CurrencyService } from '../providers/currency.service';
var HomePage = /** @class */ (function () {
    function HomePage(currencyService) {
        this.currencyService = currencyService;
    }
    HomePage.prototype.ngOnInit = function () {
        this.displayCurrencys = this.currencyService.displayCurrencys();
        this.allCurrencys = this.currencyService.allCurrencys;
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CurrencyService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map