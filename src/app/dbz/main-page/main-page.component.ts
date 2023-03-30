import { Component } from '@angular/core';
import { Personaje } from 'src/models/personaje.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  datos: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    },
    {
      nombre: 'Trunks',
      poder: 7500
    }
  ]
  personaje: Personaje = {
    nombre: '',
    poder: 0
  }
  agregar(){
    this.datos.push(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0
    }
  }
}
