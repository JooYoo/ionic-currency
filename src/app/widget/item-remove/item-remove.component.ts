import { Component, OnInit, Input } from '@angular/core';
import { iCurrency } from 'src/app/interfaces/icurrency';
import { ItemService } from 'src/app/providers/item.service';
import { CurrencyService } from 'src/app/providers/currency.service';

@Component({
  selector: 'c-item-remove',
  templateUrl: './item-remove.component.html',
  styleUrls: ['./item-remove.component.scss'],
})
export class ItemRemoveComponent implements OnInit {
  @Input() selectedCurrency: iCurrency;

  constructor(private itemService:ItemService,
              private currencyService: CurrencyService) { }

  ngOnInit() { }

  removeItem() {
    this.itemService.removeItem(this.selectedCurrency);
    // FIXME: remove item doesnt work by js_filter
    // console.log(this.currencyService.displayCurrencies)
  }

}
