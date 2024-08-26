import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // declaración de objeto tipo FormGroup
  formSignup: FormGroup = new FormGroup({});

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.formSignup = new FormGroup ({  
      name: new FormControl('',[

      ]),
      lastName: new FormControl('',[

      ]),
      age: new FormControl('',[

      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]),
      passwordVerication: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ])
    })
  }

  message: any;
  sendSignup(): void{
    const {name, lastName, email, password, age} = this.formSignup.value;
    console.log(name, lastName, email, password, age);
    
    
    this.authService.sendSignup(name, lastName, email, password, age)
        .subscribe( {
        next: (responseOK) => {
          this.message = responseOK.message;
          console.log(this.message);
      },
      error: err => {
        console.log("Usuario no registrado, error");
        this.message = err.error.message;
        console.log(this.message);
      },
      complete: () => {
        console.log("Usuario registrado correctamente")
      }
  })
  }
}
