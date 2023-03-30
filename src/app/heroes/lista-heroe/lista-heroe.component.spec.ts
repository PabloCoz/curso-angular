import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHeroeComponent } from './lista-heroe.component';

describe('ListaHeroeComponent', () => {
  let component: ListaHeroeComponent;
  let fixture: ComponentFixture<ListaHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
