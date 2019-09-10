import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CalculatorComponent } from './calculator.component';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[CalculatorComponent]
})
export class CalculatorModule { }
