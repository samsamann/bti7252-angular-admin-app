import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorMapperMobileComponent } from './sensor-mapper-mobile.component';

describe('SensorMapperMobileComponent', () => {
  let component: SensorMapperMobileComponent;
  let fixture: ComponentFixture<SensorMapperMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorMapperMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorMapperMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
