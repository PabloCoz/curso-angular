import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from 'src/models/personaje.models';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agrega-personaje',
  templateUrl: './agrega-personaje.component.html',
})
export class AgregaPersonajeComponent {

  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService:DbzService) {
  }

 // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    //this.onNuevoPersonaje.emit(this.personaje);
    this.dbzService.agregarPersonaje(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0
    }
  }
}
