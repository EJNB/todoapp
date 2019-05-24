import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './models/todo.model';
import * as fromFilter from '../filters/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFilter.filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);

      case 'pendientes':
        return todos.filter( todo => !todo.completado);

      default:
        return todos;
    }
  }
}
