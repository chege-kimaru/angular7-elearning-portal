import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NQuizQuestionsComponent } from './n-quiz-questions.component';

describe('NQuizQuestionsComponent', () => {
  let component: NQuizQuestionsComponent;
  let fixture: ComponentFixture<NQuizQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NQuizQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
