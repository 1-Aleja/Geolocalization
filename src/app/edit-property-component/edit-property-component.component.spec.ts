import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPropertyComponentComponent } from './edit-property-component.component';

describe('EditPropertyComponentComponent', () => {
  let component: EditPropertyComponentComponent;
  let fixture: ComponentFixture<EditPropertyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPropertyComponentComponent]
    });
    fixture = TestBed.createComponent(EditPropertyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
