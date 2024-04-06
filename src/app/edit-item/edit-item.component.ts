// edit-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  @Input() selectedItem: any;
  @Output() saveChanges: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onSaveChanges() {
    // Perform validation if required
    if (this.isValid(this.selectedItem)) {
      // Emit an event to notify the parent component (item-list) about the changes
      this.saveChanges.emit(this.selectedItem);
    } else {
      console.error('Invalid item data');
    }
  }

  isValid(item: any): boolean {
    // Add validation logic here
    // For example, check if all required fields are filled
    // You can also include additional validation checks for each field
    return item && 
           item.first_name && 
           item.last_name && 
           item.email && 
           this.isValidEmail(item.email);
}

isValidEmail(email: string): boolean {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


}
