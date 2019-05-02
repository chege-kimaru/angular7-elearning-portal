import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NQuestionChoicesComponent } from './n-question-choices.component';

describe('NQuestionChoicesComponent', () => {
  let component: NQuestionChoicesComponent;
  let fixture: ComponentFixture<NQuestionChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NQuestionChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NQuestionChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
