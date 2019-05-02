import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTopicQuizesComponent } from './n-topic-quizes.component';

describe('NTopicQuizesComponent', () => {
  let component: NTopicQuizesComponent;
  let fixture: ComponentFixture<NTopicQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTopicQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTopicQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
