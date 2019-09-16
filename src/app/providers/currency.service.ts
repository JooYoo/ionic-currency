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


  updateCurrency(selectCurrency: string, allCurrencys: iCurrency[]) {
    this.getApiCurreny(selectCurrency, allCurrencys);
  }

  getApiCurreny(selectCurrency: string, allCurrencys: iCurrency[]) {
    let obs = this.http.get<any>('https://api.exchangeratesapi.io/latest?base=' + selectCurrency);
    obs.subscribe((data) => {
      let apiCurrencys = data.rates;
      this.setRates(apiCurrencys)
    });
  }

  setRates(apiCurrencys: any) {

    Object.keys(apiCurrencys).forEach((key) => {
      let currency = this.allCurrencys.find(x => x.text == key);
      if (currency) {
        currency.rate = apiCurrencys[key].toFixed(2);
        currency.kpResult = apiCurrencys[key].toFixed(2);
      } else {
        this.setupCurrencys(apiCurrencys, key, this.allCurrencys);
      }
    });
  }

  setupCurrencys(apiCurrencys: any, key: any, allCurrencys: iCurrency[]) {
    let newCurrency = {
      id: allCurrencys.length - 1,
      text: key,
      rate: apiCurrencys[key].toFixed(2),
      kpResult: apiCurrencys[key].toFixed(2),
      kpInput: '',
      isSelected: false
    }
    allCurrencys.push(newCurrency);
  }

  displayCurrencys(): iCurrency[] {
    return [
      this.findCurrency("CNY", this.allCurrencys),
      this.findCurrency("EUR", this.allCurrencys),
      this.findCurrency("USD", this.allCurrencys),
      this.findCurrency("JPY", this.allCurrencys),
    ]
  }

  findCurrency(currencyType: string, allCurrencys: iCurrency[]){
    return allCurrencys.find(x=>x.text == currencyType)
  }

}
