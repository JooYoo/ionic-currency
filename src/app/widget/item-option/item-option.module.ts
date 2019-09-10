import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemOptionComponent } from './item-option.component'

@NgModule({
  declarations: [ItemOptionComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ItemOptionComponent]
})
export class ItemOptionModule { }
