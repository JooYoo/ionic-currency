import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRemoveComponent } from './item-remove.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ItemRemoveComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ItemRemoveComponent]
})
export class ItemRemoveModule { }
