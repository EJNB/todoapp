import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {EditarTodoAction, EliminarTodoAction, ToggleTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styles: []
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo; // aqui le estoy diciendo a mi componente hijo q vamos a recibir un elemento del padre
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef; // De esta manera hago referencia a un elemento, en este caso al input de edit

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe(value => this.store.dispatch(new ToggleTodoAction(this.todo.id)));
  }

  editar() {
    this.editando = true;
    setTimeout(() => this.txtInputFisico.nativeElement.select(), 1);
  }

  terminarEdition() {
    if (this.txtInput.value === this.todo.texto) { return; }
    if (this.txtInput.invalid) { return; }
    this.editando = false;
    this.store.dispatch(new EditarTodoAction(this.todo.id, this.txtInput.value));
  }

  borrarTodo() {
    this.store.dispatch(new EliminarTodoAction(this.todo.id));
  }
}
