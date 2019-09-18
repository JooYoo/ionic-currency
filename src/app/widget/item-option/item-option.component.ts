import { Component, OnInit, Input } from '@angular/core';
import { PickerOptions } from '@ionic/core';
import { PickerController } from '@ionic/angular';
import { iCurrency } from '../../interfaces/icurrency';

@Component({
  selector: 'c-item-option',
  templateUrl: './item-option.component.html',
  styleUrls: ['./item-option.component.scss'],
})
export class ItemOptionComponent implements OnInit {
  @Input() currency: iCurrency;
  @Input() slidingItem: any;
  @Input() allCurrencies: iCurrency[]
  @Input() displayCurrencies: iCurrency[]

  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() { }


  async showBasicPiker(currentItemId: any, slidingItem: any) {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: currentItemId,
          options: this.allCurrencies
        }
      ]
    };

    let picker = await this.pickerCtrl.create(opts);

    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn(currentItemId);

      /*
        - get this currency
        - get target currency 
        - exchange the selected item to listed item in displayCurrencies[]
      */
      let targetCurrenyText = col.options[col.selectedIndex].text;
      let targetCurrency = this.allCurrencies.find(x => x.text == targetCurrenyText);
      this.displayCurrencies[currentItemId] = targetCurrency;

      // close sliding item
      slidingItem.close();
    });
  }

}
