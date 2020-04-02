import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalsituationComponent } from './localsituation.component';

describe('LocalsituationComponent', () => {
  let component: LocalsituationComponent;
  let fixture: ComponentFixture<LocalsituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalsituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalsituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
