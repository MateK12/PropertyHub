import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.less']
})
export class InicioSesionComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginService: LoginServiceService) { }
  form!: FormGroup;
  ngOnInit(): void {
    this.createForm()
  }
  private createForm() {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.maxLength(20)]],
      mail: ['', [Validators.required, Validators.maxLength(20)]],
      contraseña: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }
  OnLogIn() {
    let user = this.form.getRawValue();
    console.log(user);
  }

}
