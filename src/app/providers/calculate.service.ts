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

  public selectedItem: Currency;
  public unSelectedItems: Currency[]

  constructor(private currencyService: CurrencyService) { }

  getSelectId(id: number) {
    this.id = id;
    this.digits ='';
    this.result ='';
  }

  /* selected item:
     - highlight item
     - reset kpResult to 1
  */
  setSelectedItem() {
    this.selectedItem = this.currencyService.allCurrencys[this.id];
    this.selectedItem.isSelected = true;
    this.selectedItem.kpResult = "1"
  }

  /* unselected item 
      - get all the item except the selected one
      - no highlight; no kpInput
   */
  setUnselectedItems() {
    this.unSelectedItems = this.currencyService.allCurrencys.
      filter(x => x.id != this.id);
    this.unSelectedItems.forEach(item => {
      item.isSelected = false;
      item.kpInput = '';
    });
  }

  setDigit(digit: string) {
    this.digits += digit;
    this.selectedItem.kpInput = this.digits;
  }

  setResult() {
    let currentCurrency = this.selectedItem;
    currentCurrency.kpResult = this.calculateKbInput(this.digits);
  }

  clearDigit() {
    this.digits = '';
    this.result = '';
    this.selectedItem.kpInput = '';
    this.selectedItem.kpResult = '1';
  }

  calculateKbInput(kbInputs: string): string {
    this.result = this.selectedItem.kpResult;

    try {
      var kbResult: string = eval(kbInputs);
      return kbResult;
    } catch (error) {
      console.warn('equation is not finished.')
      return this.result;
    }
  }



}