import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInstructorRequestComponent } from './single-instructor-request.component';

describe('SingleInstructorRequestComponent', () => {
  let component: SingleInstructorRequestComponent;
  let fixture: ComponentFixture<SingleInstructorRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInstructorRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInstructorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
