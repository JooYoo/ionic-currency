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

  getCurrencies(){
    this.allCurrencies = this.currencyService.allCurrencys;
    this.displayCurrencies = this.currencyService.displayCurrencies;
  }

  addItem(currencyType: string) {
    this.getCurrencies();
    let newCurreny = this.allCurrencies.find(x=>x.text == currencyType);
    this.displayCurrencies.push(newCurreny);
  }

}
