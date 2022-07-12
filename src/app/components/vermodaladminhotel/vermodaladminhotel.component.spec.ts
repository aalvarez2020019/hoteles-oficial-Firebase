import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VermodaladminhotelComponent } from './vermodaladminhotel.component';

describe('VermodaladminhotelComponent', () => {
  let component: VermodaladminhotelComponent;
  let fixture: ComponentFixture<VermodaladminhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VermodaladminhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VermodaladminhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
