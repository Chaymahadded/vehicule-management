import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddthistoriqueComponent } from './addthistorique.component';

describe('AddthistoriqueComponent', () => {
  let component: AddthistoriqueComponent;
  let fixture: ComponentFixture<AddthistoriqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddthistoriqueComponent]
    });
    fixture = TestBed.createComponent(AddthistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
