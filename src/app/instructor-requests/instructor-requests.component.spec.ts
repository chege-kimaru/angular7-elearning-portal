import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorRequestsComponent } from './instructor-requests.component';

describe('InstructorRequestsComponent', () => {
  let component: InstructorRequestsComponent;
  let fixture: ComponentFixture<InstructorRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
