import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent3Component } from './pie-chart-component3.component';

describe('PieChartComponent3Component', () => {
  let component: PieChartComponent3Component;
  let fixture: ComponentFixture<PieChartComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
