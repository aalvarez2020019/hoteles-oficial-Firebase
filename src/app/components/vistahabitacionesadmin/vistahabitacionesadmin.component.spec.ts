import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistahabitacionesadminComponent } from './vistahabitacionesadmin.component';

describe('VistahabitacionesadminComponent', () => {
  let component: VistahabitacionesadminComponent;
  let fixture: ComponentFixture<VistahabitacionesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistahabitacionesadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistahabitacionesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
