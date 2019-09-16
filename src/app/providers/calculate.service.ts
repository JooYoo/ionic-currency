import { Injectable } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency } from '../interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  public id: number = 0;

  public selectedItem: Currency;
  public unSelectedItems: Currency[]

  constructor(private currencyService: CurrencyService) { }

  getSelectId(id: number) {
    this.id = id;
  }

  /* selected item:
     - highlight item
     - reset kpResult to 1
     - the API has problem: when EUR selected there is no {'EUR':1} in the list.
  */
  setSelectedItem(selectedCurrency: Currency) {
    this.selectedItem = this.currencyService.allCurrencys[this.id];
    this.selectedItem.isSelected = true;
    this.selectedItem.kpResult = '1.00';
    this.selectedItem.kpInput = '';
    
    this.apiEurFix(selectedCurrency);
  }
  apiEurFix(selectedCurrency: Currency) {
    if (selectedCurrency.text == "EUR") {
      selectedCurrency.rate = 1;
    }
  }

  /* unselected item 
      - get all the item except the selected one
      - no highlight; no kpInput
   */
  setUnselectedItems() {
    this.unSelectedItems = this.currencyService.allCurrencys.
      filter(x => x.id != this.id);
    this.unSelectedItems.forEach(currency => {
      currency.isSelected = false;
      currency.kpInput = '';
    });
  }

  /* keypad: calculation */
  buildDigits(nowInput: string) {
    this.selectedItem.kpInput += nowInput;
    this.calculateKbInput(this.selectedItem);
  }

  clearDigit() {
    this.selectedItem.kpInput = '';
    this.selectedItem.kpResult = '1';
    this.calculateCurrencys(this.selectedItem.kpResult, this.currencyService.allCurrencys);
  }

  calculateKbInput(selectedItem: Currency) {
    try {
      selectedItem.kpResult = eval(selectedItem.kpInput);
      this.calculateCurrencys(selectedItem.kpResult, this.currencyService.allCurrencys);
    } catch (error) {
      console.warn('Currency App: equation is not finished.')
    }
  }

  calculateCurrencys(selectedItemKpResult: string, allCurrencys: Currency[]) {
    allCurrencys.forEach(currency => {
      currency.kpResult = String((Number(selectedItemKpResult) * currency.rate).toFixed(2));
    });
  }



}