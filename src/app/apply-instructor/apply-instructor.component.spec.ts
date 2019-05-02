import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyInstructorComponent } from './apply-instructor.component';

describe('ApplyInstructorComponent', () => {
  let component: ApplyInstructorComponent;
  let fixture: ComponentFixture<ApplyInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
