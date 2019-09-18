import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/providers/item.service';
import { CurrencyService } from 'src/app/providers/currency.service';

@Component({
  selector: 'c-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss'],
})
export class ItemAddComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit() {}
  
  addItem(){
    this.itemService.addItem('MXN');
  }
}
