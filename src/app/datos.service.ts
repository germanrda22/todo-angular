import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  tareas = new Array();
  constructor() { }
  agregarTodo(nuevaTarea:any){
    this["tareas"].push(nuevaTarea);
    this.ordenarPrioridad();
    this.updateLocalStorage();
  };
  cambiarEstado(index:any){
    this["tareas"][index].estado = !this["tareas"][index].estado;
    this.updateLocalStorage();
  };
  aumentarPrioridad(index:any){
    if(this["tareas"][index].prioridad > 1){
      this["tareas"][index].prioridad --;
      this.ordenarPrioridad();
      this.updateLocalStorage();
    }
  };
  disminuirPrioridad(index:any){
    if(this["tareas"][index].prioridad < 3){
      this["tareas"][index].prioridad++;
      this.ordenarPrioridad();
      this.updateLocalStorage();
    }
  };
  borrar(index:any){
    this["tareas"].splice(index, 1);
    this.updateLocalStorage();
  };
  borrarCompletadas(){
    this["tareas"] = JSON.parse(localStorage["tareas"]);
    let completadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (!tarea.estado) {
        completadas.push(tarea);
      }
    });
    this["tareas"] = completadas;
    this.updateLocalStorage();
  };
  mostrarCompletadas(){
    this["tareas"] = JSON.parse(localStorage["tareas"]);

    let completadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (tarea.estado) {
        completadas.push(tarea);
      }
      this["tareas"] = completadas;
    });
  };
  mostrarIncompletadas(){
    this["tareas"] = JSON.parse(localStorage["tareas"]);

    let incompletadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (!tarea.estado) {
        incompletadas.push(tarea);
      }
      this["tareas"] = incompletadas;
    });
  };
  mostrarTodas(){
    this["tareas"] = JSON.parse(localStorage["tareas"]);
  };
  porhacer(){
    let porhacer = this.tareas.filter((tarea) => !tarea.estado).length;
    return porhacer;
  };
  borrarTodas(){
    this["tareas"] = [];
  };
  ordenarPrioridad(){
    this["tareas"] = this["tareas"].sort((a, b) => {
      if(a.prioridad < b.prioridad){
        return -1;
      }else if(a.prioridad > b.prioridad){
        return 1;
      }else{
        return 0;
      }
    });
    this.updateLocalStorage();
  };
  updateLocalStorage(){
    localStorage["tareas"] = JSON.stringify(this["tareas"]);
  };
}
