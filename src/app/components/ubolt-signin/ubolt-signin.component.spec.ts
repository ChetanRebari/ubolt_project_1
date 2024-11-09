import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UboltSigninComponent } from './ubolt-signin.component';

describe('UboltSigninComponent', () => {
  let component: UboltSigninComponent;
  let fixture: ComponentFixture<UboltSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UboltSigninComponent]
    });
    fixture = TestBed.createComponent(UboltSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
