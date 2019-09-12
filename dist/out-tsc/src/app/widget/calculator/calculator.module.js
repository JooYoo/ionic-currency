import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CalculatorComponent } from './calculator.component';
var CalculatorModule = /** @class */ (function () {
    function CalculatorModule() {
    }
    CalculatorModule = tslib_1.__decorate([
        NgModule({
            declarations: [CalculatorComponent],
            imports: [
                CommonModule,
                IonicModule
            ],
            exports: [CalculatorComponent]
        })
    ], CalculatorModule);
    return CalculatorModule;
}());
export { CalculatorModule };
//# sourceMappingURL=calculator.module.js.map