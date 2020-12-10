import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObsComponent } from './demo-obs.component';

describe('DemoObsComponent', () => {
  let component: DemoObsComponent;
  let fixture: ComponentFixture<DemoObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
