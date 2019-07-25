import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Currency } from '../model/Currency';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myCurrencys = []
  defaultCurrencys = [
    new Currency(0, "CYN", 0),
    new Currency(1, "EUR", 1)
  ]

  getAllCurrencys() {
    return [
      new Currency(0, "CYN", 0),
      new Currency(1, "EUR", 1),
      new Currency(2, "USD", 2),
      new Currency(3, "JPY", 3),
    ]
  }


  constructor(private pickerCtrl: PickerController) { }

  async showBasicPiker(clickedItemId: any, slidingItem) {


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
          name: clickedItemId,
          options: this.getAllCurrencys()
        }
      ]
    };

    let picker = await this.pickerCtrl.create(opts);
    picker.present();

    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn(clickedItemId);
      this.defaultCurrencys[clickedItemId].text = col.options[col.selectedIndex].text;

      // close sliding item
      slidingItem.close();

    });
  }


}
