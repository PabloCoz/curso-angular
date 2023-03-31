import { Injectable } from "@angular/core";
import { Personaje } from "src/models/personaje.models";

@Injectable()

export class DbzService {
  private _datos: Personaje[] = [
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

  get datos(): Personaje[] {
    return [...this._datos];
  }

  constructor() {
    console.log("Servicio inicializado");
  }

  agregarPersonaje(personaje: Personaje) {
    this._datos.push(personaje);
  }
}
