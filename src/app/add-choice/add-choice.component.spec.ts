import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChoiceComponent } from './add-choice.component';

describe('AddChoiceComponent', () => {
  let component: AddChoiceComponent;
  let fixture: ComponentFixture<AddChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
