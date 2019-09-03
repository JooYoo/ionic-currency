import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Currency } from '../interfaces/currency';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myCurrencys = []

  defaultCurrencys: Currency[] = [
    {
      id: 0,
      text: "CYN",
      value: 0
    },
    {
      id: 1,
      text: "EUR",
      value: 1
    },
  ]

  getAllCurrencys():Currency[] {
    return [
      {
        id: 1,
        text: "CYN",
        value: 1
      },
      {
        id: 1,
        text: "EUR",
        value: 1
      },
      {
        id: 1,
        text: "USD",
        value: 1
      },
      {
        id: 1,
        text: "JPY",
        value: 1
      }
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
