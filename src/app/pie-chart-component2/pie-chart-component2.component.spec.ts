import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent2Component } from './pie-chart-component2.component';

describe('PieChartComponent2Component', () => {
  let component: PieChartComponent2Component;
  let fixture: ComponentFixture<PieChartComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
