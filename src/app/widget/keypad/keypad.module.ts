import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeypadComponent } from './keypad.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [KeypadComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[KeypadComponent]
})
export class KeypadModule { }
