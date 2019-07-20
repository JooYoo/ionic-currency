import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currency = ''

  constructor(private pickerCtrl: PickerController) { }

  async showBasicPiker() {
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
          name: 'currency',
          options: [
            { text: 'CNY', value: 'A' },
            { text: 'EUR', value: 'B' },
            { text: 'USD', value: 'C' }
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('currency');
      this.currency = col.options[col.selectedIndex].text;
    });

  }


}
