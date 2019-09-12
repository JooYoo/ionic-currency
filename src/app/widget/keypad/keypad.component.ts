import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CalculateService } from 'src/app/providers/calculate.service';

@Component({
  selector: 'c-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit {

  constructor(private calculateService: CalculateService) { }

  ngOnInit() { }

  setInput(nowInput: string) {
    this.calculateService.setDigit(nowInput);
    this.calculateService.setResult();
  }

  clearKbInput() {
    this.calculateService.clearDigit();
  }
}
