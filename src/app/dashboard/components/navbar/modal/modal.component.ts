import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  isVisible = false;
  conditionState: any;
  constructor(private fb: FormBuilder, private dashboardHTTP: LoginServiceService) { }
  form: any;
  ngOnInit(): void {
    this.createForm()
  }
  showModal(): void {
    this.isVisible = true;
  }
  private createForm() {
    this.form = this.fb.group({
      addres: ['', [Validators.maxLength(60)]],
      tenant: [null, [Validators.maxLength(40)]],
      amount: [null, [Validators.maxLength(20)]],
      paid: [null],
      propertyCost: [null, [Validators.required, Validators.maxLength(20)]],
      contact: [null, [Validators.required, Validators.maxLength(40)]],
      condition: ['', [Validators.required, Validators.maxLength(20)]],
      observation: [null, [Validators.required, Validators.maxLength(200)]],
      leasedSince: [null, [Validators.maxLength(20)]],
      userFK: [localStorage.getItem('userID')]
    });
  }
  OnSubmit(): void {
    let newLease = this.form.getRawValue();
    console.log(newLease);
    this.dashboardHTTP.CreateLease(newLease).subscribe({
      next: response => {
        console.log(response);
      }
    })
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  OnChangeCondition(): void {
    this.conditionState = this.form.get('condition').value
    console.log(this.conditionState);
  }
}