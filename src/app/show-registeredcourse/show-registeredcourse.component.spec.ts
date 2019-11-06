import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRegisteredcourseComponent } from './show-registeredcourse.component';

describe('ShowRegisteredcourseComponent', () => {
  let component: ShowRegisteredcourseComponent;
  let fixture: ComponentFixture<ShowRegisteredcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRegisteredcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRegisteredcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
