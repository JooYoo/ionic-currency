import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { IonicModule } from '@ionic/angular';
var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
    }
    ToolbarModule = tslib_1.__decorate([
        NgModule({
            declarations: [ToolbarComponent],
            imports: [
                CommonModule,
                IonicModule
            ],
            exports: [ToolbarComponent]
        })
    ], ToolbarModule);
    return ToolbarModule;
}());
export { ToolbarModule };
//# sourceMappingURL=toolbar.module.js.map