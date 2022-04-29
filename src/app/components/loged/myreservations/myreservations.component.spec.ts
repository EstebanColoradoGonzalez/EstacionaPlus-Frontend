import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreservationsComponent } from './myreservations.component';

describe('MyreservationsComponent', () => {
  let component: MyreservationsComponent;
  let fixture: ComponentFixture<MyreservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyreservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
