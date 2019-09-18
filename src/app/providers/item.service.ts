import { Injectable } from '@angular/core';
import { CurrencyService } from './currency.service';
import { iCurrency } from '../interfaces/icurrency';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  allCurrencies: iCurrency[];
  displayCurrencies: iCurrency[];

  constructor(private currencyService: CurrencyService) { }

  getCurrencies() {
    this.allCurrencies = this.currencyService.allCurrencys;
    this.displayCurrencies = this.currencyService.displayCurrencies;
  }

  addItem(currencyType: string) {
    this.getCurrencies();
    let newCurreny = this.allCurrencies.find(x => x.text == currencyType);
    this.displayCurrencies.push(newCurreny);
  }

  removeItem(selectedCurrey: iCurrency) {
    this.getCurrencies();
    this.displayCurrencies.splice(this.displayCurrencies.indexOf(selectedCurrey), 1);

    // FIXME: remove item doesnt work by js_filter
    // this.displayCurrencies = this.displayCurrencies.filter(x => x !== selectedCurrey);
    //console.log(this.displayCurrencies)
  }


}
