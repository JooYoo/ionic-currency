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

  allCurrencys: Currency[]=[
    {
      id: 0,
      text: "CYN",
      rate: 1,
      kpResult:'1',
      kpInput: '',
      isSelected: false
    },
    {
      id: 1,
      text: "EUR",
      rate: 1,
      kpResult:'2',
      kpInput: '',
      isSelected: false
    },
    {
      id: 2,
      text: "USD",
      rate: 1,
      kpResult:'3',
      kpInput: '',
      isSelected: false
    },
    {
      id: 3,
      text: "JPY",
      rate: 1,
      kpResult:'4',
      kpInput: '',
      isSelected: false
    }
  ]

  apiCurrencys:Icurrency[];
  





  setupCurrency(currencyType:string){
    this.getApiCurreny(currencyType); 
  }

  getApiCurreny(currencyType: string){
    let obs = this.http.get<any>('https://api.exchangeratesapi.io/latest?base='+currencyType);
    obs.subscribe((data)=>{
      this.apiCurrencys = data.rates;
      console.log(this.apiCurrencys);


      
      // this.allCurrencys.forEach(currency => {
      //   let currencyType = currency.text;
      //   currency.rate = this.rawCurrencys.find(x=>x.rates.)
      // });

      
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
