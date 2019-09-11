import { Injectable } from '@angular/core';
import { Currency } from '../interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  getAllCurrencys(): Currency[] {
    return [
      {
        id: 0,
        text: "CYN",
        value: 1,
        kpInput: '',
        kpResult:''
      },
      {
        id: 1,
        text: "EUR",
        value: 1,
        kpInput: '',
        kpResult:''
      },
      {
        id: 2,
        text: "USD",
        value: 1,
        kpInput: '',
        kpResult:''
      },
      {
        id: 3,
        text: "JPY",
        value: 1,
        kpInput: '',
        kpResult:''
      }
    ]
  }


  displayCurrencys(): Currency[] {
    return [
      this.getAllCurrencys()[0],
      this.getAllCurrencys()[1],
      this.getAllCurrencys()[2]
    ]
  }

}
