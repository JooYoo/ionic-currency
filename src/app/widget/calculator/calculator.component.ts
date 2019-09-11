import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/providers/calculate.service';

@Component({
  selector: 'c-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {

  public kbInputs: string = "";
  public result: string = "";


  constructor(private calculateService: CalculateService) { }

  ngOnInit() {
    this.calculateService.currentDigit
      .subscribe(message => this.kbInputs= message);

    this.calculateService.currentResult
      .subscribe(message=>this.result=message);
    
  }
}