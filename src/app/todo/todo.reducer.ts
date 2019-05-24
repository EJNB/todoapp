import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Todo1');
const todo2 = new Todo('Todo2');
const todo3 = new Todo('Todo3');
todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];


export function todoReducer(state= estadoInicial, action: fromTodo.Acciones): Todo[] {
  switch (action.type) {

    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        }
        return todoEdit;
      });

    case fromTodo.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id ===  action.id) {
          return {
            ...todoEdit,
            texto: action.text
          };
        }
        return todoEdit;
      });

    case fromTodo.ELIMINAR_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id );

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
            completado: action.completado
        };
      });

    case fromTodo.ELIMINAR_ALL_TODO_COMPLETED:
      return state.filter( todoEdit => !todoEdit.completado);

    default:
      return state;
  }
}
