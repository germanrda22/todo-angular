import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listatareas: DatosService;

  constructor(tareas: DatosService) {this.listatareas = tareas; }

  ngOnInit(): void {
    this.listatareas.tareas = JSON.parse(localStorage['tareas']);
  }

}
