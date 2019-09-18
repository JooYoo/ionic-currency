import { Component } from '@angular/core';
import { iCurrency } from '../interfaces/icurrency';
import { CurrencyService } from '../providers/currency.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  allCurrencys: iCurrency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    /*
      - update once all the currencys and 
      - load them to local Currency = allCurrencies[] + displayCurrencies
    */
    this.currencyService.getApiCurrenies('CNY');
    this.allCurrencys = this.currencyService.allCurrencys;
    this.currencyService.setupDisplayCurrencies();
  }

  get displayCurrencies() {
    return this.currencyService.displayCurrencies;
  }
}
