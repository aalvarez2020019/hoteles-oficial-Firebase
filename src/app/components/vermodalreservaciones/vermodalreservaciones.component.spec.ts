import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VermodalreservacionesComponent } from './vermodalreservaciones.component';

describe('VermodalreservacionesComponent', () => {
  let component: VermodalreservacionesComponent;
  let fixture: ComponentFixture<VermodalreservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VermodalreservacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VermodalreservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
