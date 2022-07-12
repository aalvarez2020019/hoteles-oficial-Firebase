import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppusuariosComponent } from './appusuarios.component';

describe('AppusuariosComponent', () => {
  let component: AppusuariosComponent;
  let fixture: ComponentFixture<AppusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
