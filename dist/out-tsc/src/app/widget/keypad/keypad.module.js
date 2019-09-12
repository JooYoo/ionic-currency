import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeypadComponent } from './keypad.component';
import { IonicModule } from '@ionic/angular';
var KeypadModule = /** @class */ (function () {
    function KeypadModule() {
    }
    KeypadModule = tslib_1.__decorate([
        NgModule({
            declarations: [KeypadComponent],
            imports: [
                CommonModule,
                IonicModule
            ],
            exports: [KeypadComponent]
        })
    ], KeypadModule);
    return KeypadModule;
}());
export { KeypadModule };
//# sourceMappingURL=keypad.module.js.map