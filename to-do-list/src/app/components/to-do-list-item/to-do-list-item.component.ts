import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { ListItem } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ToDoListItemComponent {
  listItem = input.required<ListItem>();
  deleteItemById = output<number>();

  deleteItem(id: number) {
    this.deleteItemById.emit(id);
  }
}
