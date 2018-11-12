import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapperPageComponent } from './mapper-page.component';

describe('MapperPageComponent', () => {
  let component: MapperPageComponent;
  let fixture: ComponentFixture<MapperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
