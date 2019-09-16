import { Component, OnInit, Input } from '@angular/core';
import { CalculateService } from 'src/app/providers/calculate.service';
import { iCurrency } from 'src/app/interfaces/icurrency';

@Component({
  selector: 'c-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {

  @Input() currency: iCurrency

  constructor(private calculateService: CalculateService) { }

  ngOnInit() { }
 
}