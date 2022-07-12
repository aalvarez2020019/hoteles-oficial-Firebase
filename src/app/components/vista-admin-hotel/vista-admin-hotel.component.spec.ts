import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdminHotelComponent } from './vista-admin-hotel.component';

describe('VistaAdminHotelComponent', () => {
  let component: VistaAdminHotelComponent;
  let fixture: ComponentFixture<VistaAdminHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAdminHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAdminHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
