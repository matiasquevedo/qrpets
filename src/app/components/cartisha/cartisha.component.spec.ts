import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartishaComponent } from './cartisha.component';

describe('CartishaComponent', () => {
  let component: CartishaComponent;
  let fixture: ComponentFixture<CartishaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartishaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
