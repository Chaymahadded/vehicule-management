import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrappelComponent } from './editrappel.component';

describe('EditrappelComponent', () => {
  let component: EditrappelComponent;
  let fixture: ComponentFixture<EditrappelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditrappelComponent]
    });
    fixture = TestBed.createComponent(EditrappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
