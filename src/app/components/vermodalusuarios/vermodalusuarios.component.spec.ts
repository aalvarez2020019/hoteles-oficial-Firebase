import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VermodalusuariosComponent } from './vermodalusuarios.component';

describe('VermodalusuariosComponent', () => {
  let component: VermodalusuariosComponent;
  let fixture: ComponentFixture<VermodalusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VermodalusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VermodalusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
