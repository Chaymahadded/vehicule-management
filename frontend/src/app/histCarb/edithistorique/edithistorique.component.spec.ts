import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithistoriqueComponent } from './edithistorique.component';

describe('EdithistoriqueComponent', () => {
  let component: EdithistoriqueComponent;
  let fixture: ComponentFixture<EdithistoriqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdithistoriqueComponent]
    });
    fixture = TestBed.createComponent(EdithistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
