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
    CalculatorModule
  ],
})
export class HomePageModule {}
