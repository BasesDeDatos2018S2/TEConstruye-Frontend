import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStageComponent } from './view-stage.component';

describe('ViewStageComponent', () => {
  let component: ViewStageComponent;
  let fixture: ComponentFixture<ViewStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
