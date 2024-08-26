import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

// Jasmine

// 'describe', es el nombre de la prueba, le podemos poner cualquiera
describe('LoginComponent Test by Moisés', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // Se encarga de cargar los modulos de testing
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        LoginComponent,
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Es la condición del test
  it('Debe retornar (True) en invalid', () => {
    // Arrange
    const mockCredentials = {
      email: "010500054033",
      password: "35444444444444444"
    }
    const emailForm: any = component.formLogin.get("email")
    const passwordForm: any = component.formLogin.get("password")
    // Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)
    // Assert
    expect(component.formLogin.invalid).toEqual(true);
  });


  it('Debe retornar (false) en invalid', () => {
    // Arrange
    const mockCredentials = {
      email: "test@test.com",
      password: "12345678"
    }
    const emailForm: any = component.formLogin.get("email")
    const passwordForm: any = component.formLogin.get("password")
    // Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)
    // Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('Debe mostrar "Iniciar sesión" en el botón de login', () => {
    const elementRef = fixture.debugElement.query(By.css('#login-button'));
    const getInnerText = elementRef.nativeElement.innerText;
    expect(getInnerText).toEqual('Iniciar sesión');
  });
});
