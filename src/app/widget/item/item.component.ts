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
  private allCurrencys: Currency[]
  @Input() currency: Currency;

  constructor(private calculateService: CalculateService,
    private currencyService: CurrencyService) { }

  ngOnInit() {
    this.allCurrencys = this.currencyService.allCurrencys;
    this.highlightSelected();
  }


  highlightSelected() {
    // set selected item to highlight
    this.allCurrencys[this.calculateService.id].isSelected = true;
    // get all the item except the selected one
    let unselectedItems = this.allCurrencys.filter(x => x.id != this.calculateService.id);
    // set all item color to unselected
    unselectedItems.forEach(item => {
      item.isSelected = false;
    });

  }

  getSelectId() {
    this.calculateService.getSelectId(this.currency.id);
    console.log(`getSelectID: ${this.currency.id}`);
    this.calculateService.digits = '';
    this.calculateService.result = '';
  }

}
