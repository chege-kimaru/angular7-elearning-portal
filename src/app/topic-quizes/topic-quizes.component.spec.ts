import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicQuizesComponent } from './topic-quizes.component';

describe('TopicQuizesComponent', () => {
  let component: TopicQuizesComponent;
  let fixture: ComponentFixture<TopicQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
