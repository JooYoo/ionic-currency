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
  allCurrencys:Currency[];




  constructor(private currencyService: CurrencyService) { }

    ngOnInit(){
      this.displayCurrencys = this.currencyService.displayCurrencys();
      this.allCurrencys = this.currencyService.allCurrencys;

      this.currencyService.updateCurrency('CNY', this.currencyService.allCurrencys);
      console.log(this.currencyService.allCurrencys);
    }

  
}
