import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  filtro: string;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

  ngOnInit() {
  }
}
