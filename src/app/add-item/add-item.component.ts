import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  newItem: any = {
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    avatar: '',
    domain: '',
    available: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addItem.emit(this.newItem);
    this.newItem = {
      id: null,
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      avatar: '',
      domain: '',
      available: false
    };
  }
}
