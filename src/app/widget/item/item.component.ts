import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../../interfaces/currency';
import { CalculateService } from 'src/app/providers/calculate.service';
import { CurrencyService } from 'src/app/providers/currency.service';


@Component({
  selector: 'c-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() currency: Currency;

  constructor(private calculateService: CalculateService) { }

  ngOnInit() {
    this.calculateService.setSelectedItem();
  }

  setItem() {
    this.calculateService.getSelectId(this.currency.id);
    this.calculateService.setSelectedItem();
    this.calculateService.setUnselectedItems();
  }

}
