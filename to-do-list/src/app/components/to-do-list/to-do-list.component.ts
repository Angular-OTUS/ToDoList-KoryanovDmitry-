import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

export interface ListItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ToDoListComponent {
  @HostBinding('class') cssClass = 'app-to-do-list';
  inputText = '';

  listItems: ListItem[] = [
    { id: 1, text: 'Buy a new gaming laptop' },
    { id: 2, text: 'Complete previous task' },
    { id: 3, text: 'Create some angualr app' },
  ];

  isAddTaskButtonDisabled(): boolean {
    return this.inputText.length === 0;
  }

  deleteItem(id: number) {
    let index = this.listItems.findIndex((listItem) => listItem.id === id);
    this.listItems.splice(index, 1);
  }

  addItem() {
    let maxId = Math.max(...this.listItems.map((listItem) => listItem.id));
    this.listItems.push({ id: maxId + 1, text: this.inputText });
    this.inputText = '';
  }
}
