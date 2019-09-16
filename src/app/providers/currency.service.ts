import { Injectable } from '@angular/core';
import { Currency } from '../interfaces/currency';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Icurrency } from '../interfaces/icurrency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  allCurrencys: Currency[] = [
    {
      id: 0,
      text: "CNY",
      rate: 1,
      kpResult: '1',
      kpInput: '',
      isSelected: false
    },
    {
      id: 1,
      text: "EUR",
      rate: 1,
      kpResult: '2',
      kpInput: '',
      isSelected: false
    },
    {
      id: 2,
      text: "USD",
      rate: 1,
      kpResult: '3',
      kpInput: '',
      isSelected: false
    },
    {
      id: 3,
      text: "JPY",
      rate: 1,
      kpResult: '4',
      kpInput: '',
      isSelected: false
    }
  ]


  updateCurrency(selectCurrency: string, allCurrencys: Currency[]) {
    this.getApiCurreny(selectCurrency, allCurrencys);
  }

  getApiCurreny(selectCurrency: string, allCurrencys: Currency[]) {
    let obs = this.http.get<any>('https://api.exchangeratesapi.io/latest?base=' + selectCurrency);
    obs.subscribe((data) => {
      let apiCurrencys = data.rates;
      this.setRates(apiCurrencys, allCurrencys)
    });
  }

  setRates(apiCurrencys: any, allCurrencys: Currency[]) {
    Object.keys(apiCurrencys).forEach(function (key) {
      let currencyType = allCurrencys.find(x => x.text == key);
      if (currencyType) {
        currencyType.rate = apiCurrencys[key];
      }
    });
  }





  displayCurrencys(): Currency[] {
    return [
      this.allCurrencys[0],
      this.allCurrencys[1],
      this.allCurrencys[2]
    ]
  }

}
