import { Component, OnInit, Input } from '@angular/core';
import { iCurrency } from '../../interfaces/icurrency'
import { CalculateService } from 'src/app/providers/calculate.service';
import { CurrencyService } from 'src/app/providers/currency.service';


@Component({
  selector: 'c-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() currency: iCurrency;

  constructor(private calculateService: CalculateService,
              private currencyService: CurrencyService) { }

  ngOnInit() {
    this.calculateService.setSelectedItem(this.currency);
  }

  setItem() {
   // this.currencyService.displayCurrencies = [];
    this.currencyService.getApiCurrenies(this.currency.text);

    this.calculateService.getSelectId(this.currency.id);
    this.calculateService.setSelectedItem(this.currency);
    this.calculateService.setUnselectedItems();

  }

}
