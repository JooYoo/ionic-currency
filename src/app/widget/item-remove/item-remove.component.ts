import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-item-remove',
  templateUrl: './item-remove.component.html',
  styleUrls: ['./item-remove.component.scss'],
})
export class ItemRemoveComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  removeItem(){
    console.log("remove item clicked !")
  }

}
