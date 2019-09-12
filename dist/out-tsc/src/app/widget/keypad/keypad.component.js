import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CalculateService } from 'src/app/providers/calculate.service';
var KeypadComponent = /** @class */ (function () {
    function KeypadComponent(calculateService) {
        this.calculateService = calculateService;
    }
    KeypadComponent.prototype.ngOnInit = function () { };
    KeypadComponent.prototype.setInput = function (nowInput) {
        this.calculateService.setDigit(nowInput);
        this.calculateService.setResult();
    };
    KeypadComponent.prototype.clearKbInput = function () {
        this.calculateService.clearDigit();
    };
    KeypadComponent = tslib_1.__decorate([
        Component({
            selector: 'c-keypad',
            templateUrl: './keypad.component.html',
            styleUrls: ['./keypad.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CalculateService])
    ], KeypadComponent);
    return KeypadComponent;
}());
export { KeypadComponent };
//# sourceMappingURL=keypad.component.js.map