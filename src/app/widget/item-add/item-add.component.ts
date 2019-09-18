import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss'],
})
export class ItemAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  addItem(){
    console.log("add clicked.")
  }
}
