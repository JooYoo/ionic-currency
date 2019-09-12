import { Injectable } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency } from '../interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  public digits: string = '';
  public result: string = '';
  public id: number = 0;

  constructor(private currencyService: CurrencyService) { }

  getSelectId(id: number) {
    this.id = id;
  }

  getCurrency():Currency{
    return this.currencyService.allCurrencys[this.id]
  }

  setDigit(digit: string) {
    this.digits += digit;
    this.getCurrency().kpInput = this.digits;
  }

  setResult() {
    let currentCurrency = this.getCurrency();
    currentCurrency.kpResult = this.calculateKbInput(this.digits);
  }

  clearDigit() {
    this.digits='';
    this.result ='';
    this.getCurrency().kpInput = '';
    this.getCurrency().kpResult = '1';
  }

  calculateKbInput(kbInputs: string): string {
    this.result = this.getCurrency().kpResult;

    try {
      var kbResult: string = eval(kbInputs);
      return kbResult;
    } catch (error) {
      console.warn('equation is not finished.')
      return this.result;
    }
  }



}