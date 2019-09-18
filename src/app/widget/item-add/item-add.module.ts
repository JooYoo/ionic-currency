import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAddComponent } from './item-add.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ItemAddComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ItemAddComponent]
})
export class ItemAddModule { }
