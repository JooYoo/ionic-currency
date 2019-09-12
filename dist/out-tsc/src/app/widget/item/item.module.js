import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { IonicModule } from '@ionic/angular';
import { CalculatorModule } from '../calculator/calculator.module';
var ItemModule = /** @class */ (function () {
    function ItemModule() {
    }
    ItemModule = tslib_1.__decorate([
        NgModule({
            declarations: [ItemComponent],
            imports: [
                CommonModule,
                IonicModule,
                CalculatorModule
            ],
            exports: [ItemComponent]
        })
    ], ItemModule);
    return ItemModule;
}());
export { ItemModule };
//# sourceMappingURL=item.module.js.map