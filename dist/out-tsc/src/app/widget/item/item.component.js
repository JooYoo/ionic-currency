import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CalculateService } from 'src/app/providers/calculate.service';
var ItemComponent = /** @class */ (function () {
    function ItemComponent(calculateService) {
        this.calculateService = calculateService;
    }
    ItemComponent.prototype.ngOnInit = function () { };
    ItemComponent.prototype.getSelectId = function () {
        this.calculateService.getSelectId(this.currency.id);
        console.log("getSelectID: " + this.currency.id);
        this.calculateService.digits = '';
        this.calculateService.result = '';
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ItemComponent.prototype, "currency", void 0);
    ItemComponent = tslib_1.__decorate([
        Component({
            selector: 'c-item',
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CalculateService])
    ], ItemComponent);
    return ItemComponent;
}());
export { ItemComponent };
//# sourceMappingURL=item.component.js.map