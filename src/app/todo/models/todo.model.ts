export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(text) {
    this.texto = text.charAt(0).toUpperCase() + text.slice(1);
    this.completado = false;
    this.id = Math.random();
  }
}
