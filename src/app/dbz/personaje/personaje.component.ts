import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
})
export class PersonajeComponent {
 // @Input() datos: any[] = [];
  constructor(private dbzService: DbzService) {}

  get datos(): any[] {
    return this.dbzService.datos;
  }
}
