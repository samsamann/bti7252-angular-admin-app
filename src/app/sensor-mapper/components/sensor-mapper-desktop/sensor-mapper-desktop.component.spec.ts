import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorMapperDesktopComponent } from './sensor-mapper-desktop.component';

describe('SensorMapperDesktopComponent', () => {
  let component: SensorMapperDesktopComponent;
  let fixture: ComponentFixture<SensorMapperDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorMapperDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorMapperDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
