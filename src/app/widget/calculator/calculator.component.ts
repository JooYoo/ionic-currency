import { Component, OnInit, Input } from '@angular/core';
import { CalculateService } from 'src/app/providers/calculate.service';
import { Currency } from 'src/app/interfaces/currency';

@Component({
  selector: 'c-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {

  public kbInputs: string = "";
  public result: string = "";
  @Input() currency: Currency


  constructor(private calculateService: CalculateService) { }

  ngOnInit() {
    this.calculateService.currentDigit
      .subscribe(message => this.kbInputs= message);

    this.calculateService.currentResult
      .subscribe(message=>this.result=message);
    
  }
}