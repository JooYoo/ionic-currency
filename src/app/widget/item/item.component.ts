import { Component, OnInit, Input } from '@angular/core';
import { iCurrency } from '../../interfaces/icurrency'
import { CalculateService } from 'src/app/providers/calculate.service';
import { CurrencyService } from 'src/app/providers/currency.service';


@Component({
  selector: 'c-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() currency: iCurrency;

  constructor(private calculateService: CalculateService,
              private currencyService: CurrencyService) { }

  ngOnInit() {
    this.calculateService.setSelectedItem(this.currency);
  }

  setItem() {
    this.calculateService.getSelectId(this.currency.id);
    this.currencyService.updateCurrency(this.currency.text,this.currencyService.allCurrencys);
    this.calculateService.setSelectedItem(this.currency);
    this.calculateService.setUnselectedItems();
  }

}
