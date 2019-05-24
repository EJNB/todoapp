import { Todo } from './todo/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filters/filter.reducer';
import * as fromFilterActions from './filters/filter.actions';

export interface AppState {
  todos: Todo[];
  filtro: fromFilterActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFilter.filtroReducer,
};

