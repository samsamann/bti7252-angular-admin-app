import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilatorAppComponent } from './ventilator-app.component';

describe('VentilatorAppComponent', () => {
  let component: VentilatorAppComponent;
  let fixture: ComponentFixture<VentilatorAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentilatorAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentilatorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
