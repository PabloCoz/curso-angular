import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListaHeroeComponent } from './lista-heroe/lista-heroe.component';
import { CommonModule } from '@angular/common';

@NgModule(
  {
    declarations: [
      HeroeComponent,
      ListaHeroeComponent
    ],
    exports: [
      ListaHeroeComponent
    ],
    imports:[
      CommonModule
    ],
  }
)

export class HeroesModule { }
