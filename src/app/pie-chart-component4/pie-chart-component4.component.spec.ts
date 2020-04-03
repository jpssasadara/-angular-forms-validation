import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent4Component } from './pie-chart-component4.component';

describe('PieChartComponent4Component', () => {
  let component: PieChartComponent4Component;
  let fixture: ComponentFixture<PieChartComponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartComponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
