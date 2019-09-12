import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../../interfaces/currency';
import { CalculateService } from 'src/app/providers/calculate.service';


@Component({
  selector: 'c-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() currency: Currency

  constructor(private calculateService:CalculateService) { }

  ngOnInit() { }

  getSelectId(){
    this.calculateService.getSelectId(this.currency.id);
    console.log(`getSelectID: ${this.currency.id}`);
    this.calculateService.digits = '';
    this.calculateService.result = '';
  }

}
