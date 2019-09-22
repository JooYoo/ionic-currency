import { Injectable } from '@angular/core';
import { CurrencyService } from './currency.service';
import { iCurrency } from '../interfaces/icurrency';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  public id: number;

  public selectedItem: iCurrency;
  public unSelectedItems: iCurrency[]

  constructor(private currencyService: CurrencyService) {
    this.id = 0;
   }

  getSelectId(id: number) {
    this.id = id;
  }

  /* selected item:
     - highlight item
     - reset kpResult to 1
     - the API has problem: when EUR selected there is no {'EUR':1} in the list.
  */
  setSelectedItem(selectedCurrency: iCurrency) {
    this.selectedItem = this.currencyService.allCurrencys[this.id];
    this.selectedItem.isSelected = true;
    this.selectedItem.kpResult = '1.00';
    this.selectedItem.kpInput = '';

    try{
      this.apiEurFix(selectedCurrency);
    }catch(error){
      return;
    }
  }
  apiEurFix(selectedCurrency: iCurrency) {
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

  calculateKbInput(selectedItem: iCurrency) {
    try {
      selectedItem.kpResult = eval(selectedItem.kpInput);
      this.calculateCurrencys(selectedItem.kpResult, this.currencyService.allCurrencys);
    } catch (error) {
      console.warn('Currency App: equation is not finished.')
    }
  }

  calculateCurrencys(selectedItemKpResult: string, allCurrencys: iCurrency[]) {
    allCurrencys.forEach(currency => {
      currency.kpResult = String((Number(selectedItemKpResult) * currency.rate).toFixed(2));
    });
  }



}