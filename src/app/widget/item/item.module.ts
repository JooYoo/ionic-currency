import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemComponent} from './item.component';
import { IonicModule } from '@ionic/angular';
import { CalculatorModule } from '../calculator/calculator.module'

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    CalculatorModule
  ],
  exports:[ItemComponent]
})
export class ItemModule { }
