import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(item: string){
    this.newItemEvent.emit(item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
