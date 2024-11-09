import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUboltComponent } from './login-ubolt.component';

describe('LoginUboltComponent', () => {
  let component: LoginUboltComponent;
  let fixture: ComponentFixture<LoginUboltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginUboltComponent]
    });
    fixture = TestBed.createComponent(LoginUboltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
