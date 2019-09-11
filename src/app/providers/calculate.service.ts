import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  private digits: string = '';
  private digitSource = new BehaviorSubject<string>("");
  public currentDigit = this.digitSource.asObservable();

  private result: string = ''; 
  private resultSource = new BehaviorSubject<string>("1");
  public currentResult = this.resultSource.asObservable();

  constructor() { }

  setDigit(digit: string) {
    if (digit == 'clear') {
      this.digits = '';
      this.digitSource.next('');
      this.resultSource.next('1');
    }else{
      this.digits += digit;
      this.digitSource.next(this.digits);
    }
  }

  setResult(){
    this.result = this.calculateKbInput(this.digits);
    this.resultSource.next(this.result);
  }

  calculateKbInput(kbInputs: string): string {
    try {
      var kbResult: string = eval(kbInputs);
      return kbResult;
    } catch (error) {
      console.warn('equation is not finished.')
      return this.result;
    }
  }
}