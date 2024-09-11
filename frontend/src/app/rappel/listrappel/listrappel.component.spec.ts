import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrappelComponent } from './listrappel.component';

describe('ListrappelComponent', () => {
  let component: ListrappelComponent;
  let fixture: ComponentFixture<ListrappelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListrappelComponent]
    });
    fixture = TestBed.createComponent(ListrappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
