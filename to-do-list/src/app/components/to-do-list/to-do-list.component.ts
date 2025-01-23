import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

export interface ListItem {
  id: number;
  text: string;
  description: string;
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
  textDescription = '';
  selectedListItemId: number | null = null;

  isLoading = true;

  listItems: ListItem[] = [
    { id: 1, text: 'Buy a new gaming laptop', description: 'When money comes' },
    {
      id: 2,
      text: 'Complete previous task',
      description: 'When you have time',
    },
    { id: 3, text: 'Create some angualr app', description: 'Finally..' },
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
    this.listItems.push({
      id: maxId + 1,
      text: this.inputText,
      description: this.textDescription,
    });
    this.inputText = '';
    this.textDescription = '';
  }

  getDescriptionByItemId(): string {
    return (
      this.listItems.find((listItem) => listItem.id === this.selectedListItemId)
        ?.description || ''
    );
  }

  selectItem(id: number) {
    this.selectedListItemId = id;
  }
}
