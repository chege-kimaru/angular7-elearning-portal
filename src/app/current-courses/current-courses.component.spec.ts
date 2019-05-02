import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCoursesComponent } from './current-courses.component';

describe('CurrentCoursesComponent', () => {
  let component: CurrentCoursesComponent;
  let fixture: ComponentFixture<CurrentCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
