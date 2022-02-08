import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  tarea = "";
  prioridad="";
  tareas: DatosService;

  constructor(tareas: DatosService) {this.tareas = tareas; }

  agregar(){
    if(this.tarea && this.prioridad){
      let todo = {
        tarea: this.tarea,
        prioridad: this.prioridad,
        fecha: new Date().toLocaleString(),
        estado: false
      };
      this.tareas.agregarTodo(todo);

      this.tarea = "";
      this.prioridad = "";
    }
  }

  ngOnInit(): void {
  }

}
