import { Injectable } from '@angular/core';
import { iCurrency } from '../interfaces/icurrency';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  allCurrencys: iCurrency[] = [
    {
      id: 0,
      text: "CNY",
      rate: 0,
      kpResult: '',
      kpInput: '',
      isSelected: false
    },
    {
      id: 1,
      text: "EUR",
      rate: 0,
      kpResult: '',
      kpInput: '',
      isSelected: false
    },
    {
      id: 2,
      text: "USD",
      rate: 0,
      kpResult: '',
      kpInput: '',
      isSelected: false
    },
    {
      id: 3,
      text: "JPY",
      rate: 0,
      kpResult: '',
      kpInput: '',
      isSelected: false
    }
  ]


  getApiCurrenies(selectCurrency: string) {
    let obs = this.http.get<any>('https://api.exchangeratesapi.io/latest?base=' + selectCurrency);
    obs.subscribe((data) => {
      let apiCurrencies = data.rates;
      this.setRates(apiCurrencies)
    });
  }

  setRates(apiCurrencies: any) {
    Object.keys(apiCurrencies).forEach((key) => {
      let currency = this.allCurrencys.find(x => x.text == key);
      if (currency) {
        currency.rate = apiCurrencies[key].toFixed(2);
        currency.kpResult = apiCurrencies[key].toFixed(2);
      } else {
        this.setupCurrencys(key, apiCurrencies[key]);
      }
    });
  }

  setupCurrencys(key: any, value: any) {
    let newCurrency = {
      id: this.allCurrencys.length,
      text: key,
      rate: value.toFixed(2),
      kpResult: value.toFixed(2),
      kpInput: '',
      isSelected: false
    }
    this.allCurrencys.push(newCurrency);
  }

  displayCurrencys(): iCurrency[] {
    return [
      this.findCurrency("CNY"),
      this.findCurrency("EUR"),
      this.findCurrency("USD"),
      this.findCurrency("JPY"),
    ]
  }

  findCurrency(currencyType: string){
    return this.allCurrencys.find(x=>x.text == currencyType)
  }

}
