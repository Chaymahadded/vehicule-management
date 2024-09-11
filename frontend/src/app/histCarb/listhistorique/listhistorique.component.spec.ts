import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhistoriqueComponent } from './listhistorique.component';

describe('ListhistoriqueComponent', () => {
  let component: ListhistoriqueComponent;
  let fixture: ComponentFixture<ListhistoriqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListhistoriqueComponent]
    });
    fixture = TestBed.createComponent(ListhistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
