import { Component, OnInit, Input } from '@angular/core';
import { CalculateService } from 'src/app/providers/calculate.service';
import { Currency } from 'src/app/interfaces/currency';

@Component({
  selector: 'c-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {

  @Input() currency: Currency

  constructor(private calculateService: CalculateService) { }

  ngOnInit() { }
 
}