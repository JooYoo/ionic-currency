import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { PickerController } from '@ionic/angular';
var ItemOptionComponent = /** @class */ (function () {
    function ItemOptionComponent(pickerCtrl) {
        this.pickerCtrl = pickerCtrl;
    }
    ItemOptionComponent.prototype.ngOnInit = function () { };
    ItemOptionComponent.prototype.showBasicPiker = function (clickedItemId, slidingItem) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var opts, picker;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Done'
                                }
                            ],
                            columns: [
                                {
                                    name: clickedItemId,
                                    options: this.allCurrencys
                                }
                            ]
                        };
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        picker.onDidDismiss().then(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var col;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, picker.getColumn(clickedItemId)];
                                    case 1:
                                        col = _a.sent();
                                        this.displayCurrencys[clickedItemId].text = col.options[col.selectedIndex].text;
                                        // close sliding item
                                        slidingItem.close();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ItemOptionComponent.prototype, "currency", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ItemOptionComponent.prototype, "slidingItem", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ItemOptionComponent.prototype, "allCurrencys", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ItemOptionComponent.prototype, "displayCurrencys", void 0);
    ItemOptionComponent = tslib_1.__decorate([
        Component({
            selector: 'c-item-option',
            templateUrl: './item-option.component.html',
            styleUrls: ['./item-option.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PickerController])
    ], ItemOptionComponent);
    return ItemOptionComponent;
}());
export { ItemOptionComponent };
//# sourceMappingURL=item-option.component.js.map