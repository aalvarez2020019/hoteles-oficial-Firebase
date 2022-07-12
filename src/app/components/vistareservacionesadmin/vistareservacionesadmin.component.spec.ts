import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistareservacionesadminComponent } from './vistareservacionesadmin.component';

describe('VistareservacionesadminComponent', () => {
  let component: VistareservacionesadminComponent;
  let fixture: ComponentFixture<VistareservacionesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistareservacionesadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistareservacionesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
