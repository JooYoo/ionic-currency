import { Component } from '@angular/core';
import { iCurrency } from '../interfaces/icurrency';
import { CurrencyService } from '../providers/currency.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  displayCurrencys: iCurrency[];
  allCurrencys: iCurrency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    /*
      in the begining: update once all the currencys and load them to local Currency[]
    */
    this.currencyService.getApiCurrenies('CNY');

    this.displayCurrencys = this.currencyService.displayCurrencys();
    this.allCurrencys = this.currencyService.allCurrencys;

    console.log(this.allCurrencys)

  }
}
