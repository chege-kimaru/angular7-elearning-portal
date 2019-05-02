import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuizComponent } from './single-quiz.component';

describe('SingleQuizComponent', () => {
  let component: SingleQuizComponent;
  let fixture: ComponentFixture<SingleQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
