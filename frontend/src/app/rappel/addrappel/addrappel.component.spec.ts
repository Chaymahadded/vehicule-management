import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrappelComponent } from './addrappel.component';

describe('AddrappelComponent', () => {
  let component: AddrappelComponent;
  let fixture: ComponentFixture<AddrappelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddrappelComponent]
    });
    fixture = TestBed.createComponent(AddrappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
