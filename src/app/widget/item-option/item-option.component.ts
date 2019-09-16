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
  @Input() allCurrencys: iCurrency[]
  @Input() displayCurrencys: iCurrency[]

  constructor( private pickerCtrl: PickerController) { }

  ngOnInit() { }


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
          options: this.allCurrencys
        }
      ]
    };

    let picker = await this.pickerCtrl.create(opts);
    picker.present();

    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn(clickedItemId);
      this.displayCurrencys[clickedItemId].text = col.options[col.selectedIndex].text;

      // close sliding item
      slidingItem.close();

    });
  }

}
