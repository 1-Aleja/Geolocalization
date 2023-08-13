import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDateButtonComponent } from './new-date-button.component';

describe('NewDateButtonComponent', () => {
  let component: NewDateButtonComponent;
  let fixture: ComponentFixture<NewDateButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDateButtonComponent]
    });
    fixture = TestBed.createComponent(NewDateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
