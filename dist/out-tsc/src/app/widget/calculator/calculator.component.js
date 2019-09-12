import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CalculateService } from 'src/app/providers/calculate.service';
var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(calculateService) {
        this.calculateService = calculateService;
    }
    CalculatorComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CalculatorComponent.prototype, "currency", void 0);
    CalculatorComponent = tslib_1.__decorate([
        Component({
            selector: 'c-calculator',
            templateUrl: './calculator.component.html',
            styleUrls: ['./calculator.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CalculateService])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
export { CalculatorComponent };
//# sourceMappingURL=calculator.component.js.map