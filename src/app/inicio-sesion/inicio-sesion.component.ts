import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.less']
})
export class InicioSesionComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginService: LoginServiceService, private router: Router) { }
  form!: FormGroup;

  userErrorMessege = "";
  PasswordErrorMessege = "";
  messegeFromBack = "";
  ngOnInit(): void {
    this.createForm()
  }
  private createForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }
  OnLogIn() {

    let userControl = this.form.get('user')
    if (this.form.get('user')?.hasError('required')) {
      this.userErrorMessege = "Porfavor, ingrese su usuario"
      if (this.form.get('contraseña')?.hasError('required')) {
        this.PasswordErrorMessege = "Porfavor, ingrese una contraseña"
      }
      return;
    }
    if (userControl?.invalid) {
      userControl.markAsDirty();
      userControl.updateValueAndValidity({ onlySelf: false });
    } else {
      this.userErrorMessege = "";
      this.PasswordErrorMessege = "";
      let user = this.form.getRawValue();
      console.log(user);
      this.loginService.SingIn(user).subscribe({
        next: response => {
          if (response.signedIn) {
            this.messegeFromBack = response.messege;
            localStorage.setItem("userID", response.userId)
            setTimeout(() => {
              this.router.navigate(['/Dashboard'])
            }, 5000);

          } else {
            this.messegeFromBack = response.messege;
          }
        }
      })
    }
  }

}
