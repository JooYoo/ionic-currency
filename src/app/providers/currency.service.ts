import { Injectable } from '@angular/core';
import { Currency } from '../interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  allCurrencys: Currency[]=[
    {
      id: 0,
      text: "CYN",
      value: 1,
      kpInput: '',
      kpResult:'1'
    },
    {
      id: 1,
      text: "EUR",
      value: 1,
      kpInput: '',
      kpResult:'1'
    },
    {
      id: 2,
      text: "USD",
      value: 1,
      kpInput: '',
      kpResult:'1'
    },
    {
      id: 3,
      text: "JPY",
      value: 1,
      kpInput: '',
      kpResult:'1'
    }
  ]

  getAllCurrencys(): Currency[] {
    return [
      {
        id: 0,
        text: "CYN",
        value: 1,
        kpInput: '',
        kpResult:'1'
      },
      {
        id: 1,
        text: "EUR",
        value: 1,
        kpInput: '',
        kpResult:'1'
      },
      {
        id: 2,
        text: "USD",
        value: 1,
        kpInput: '',
        kpResult:'1'
      },
      {
        id: 3,
        text: "JPY",
        value: 1,
        kpInput: '',
        kpResult:'1'
      }
    ]
  }


  displayCurrencys(): Currency[] {
    return [
      this.allCurrencys[0],
      this.allCurrencys[1],
      this.allCurrencys[2]
    ]
  }

}
