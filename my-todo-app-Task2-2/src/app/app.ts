import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoForm } from './todo-form/todo-form';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoForm, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todos: { text: string; completed: boolean }[] = [];

  addTodo(todo: string) {
    this.todos.push({ text: todo, completed: false });
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
