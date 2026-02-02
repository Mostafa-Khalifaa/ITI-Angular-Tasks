import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
})
export class TodoForm {
  task: string = '';
  @Output() addTodo = new EventEmitter<string>();

  add() {
    if (this.task.trim()) {
      this.addTodo.emit(this.task);
      this.task = '';
    }
  }
}
