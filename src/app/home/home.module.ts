import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ToolbarModule } from '../widget/toolbar/toolbar.module';
import { KeypadModule } from '../widget/keypad/keypad.module';
import { ItemModule } from '../widget/item/item.module';
import { ItemOptionModule } from '../widget/item-option/item-option.module';
import { CalculatorModule } from '../widget/calculator/calculator.module';
import { ItemAddModule } from '../widget/item-add/item-add.module';
import { ItemRemoveModule } from '../widget/item-remove/item-remove.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    ToolbarModule,
    KeypadModule,
    ItemModule,
    ItemOptionModule,
    CalculatorModule,
    ItemAddModule,
    ItemRemoveModule
  ],
})
export class HomePageModule {}
