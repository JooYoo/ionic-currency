import { Component } from '@angular/core';
import { Currency } from '../interfaces/currency';
import { CurrencyService } from '../providers/currency.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  displayCurrencys: Currency[];
  allCurrencys: Currency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    /*
      in the begining: update once all the currencys and load them to local Currency[]
    */
    this.currencyService.updateCurrency('CNY', this.currencyService.allCurrencys);

    this.displayCurrencys = this.currencyService.displayCurrencys();
    this.allCurrencys = this.currencyService.allCurrencys;
  }
}
