import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../../interfaces/currency';


@Component({
  selector: 'c-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() currency: Currency

  constructor() { }

  ngOnInit() { }

}
