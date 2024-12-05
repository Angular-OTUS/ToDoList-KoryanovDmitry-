import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

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
export class ToDoListComponent implements OnInit {
  @HostBinding('class') cssClass = 'app-to-do-list';
  inputText = '';

  isLoading: boolean = true;

  listItems: ListItem[] = [
    { id: 1, text: 'Buy a new gaming laptop' },
    { id: 2, text: 'Complete previous task' },
    { id: 3, text: 'Create some angualr app' },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  isAddTaskButtonDisabled(): boolean {
    return this.inputText.length === 0;
  }

  deleteItem(id: number) {
    const index = this.listItems.findIndex((listItem) => listItem.id === id);
    this.listItems.splice(index, 1);
  }

  addItem() {
    if (this.inputText.length === 0) {
      return;
    }

    const maxId = Math.max(...this.listItems.map((listItem) => listItem.id));
    this.listItems.push({ id: maxId + 1, text: this.inputText });
    this.inputText = '';
  }
}
