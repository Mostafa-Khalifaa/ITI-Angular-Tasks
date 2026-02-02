import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
})
export class TodoList {
  @Input() todos: { text: string; completed: boolean }[] = [];
  @Output() deleteTodo = new EventEmitter<number>();

  toggle(todo: { text: string; completed: boolean }) {
    todo.completed = !todo.completed;
  }

  onDelete(index: number) {
    this.deleteTodo.emit(index);
  }
}
