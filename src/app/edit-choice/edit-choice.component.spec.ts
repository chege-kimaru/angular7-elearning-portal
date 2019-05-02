import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoiceComponent } from './edit-choice.component';

describe('EditChoiceComponent', () => {
  let component: EditChoiceComponent;
  let fixture: ComponentFixture<EditChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
