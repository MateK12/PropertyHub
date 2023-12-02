import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/services/dashboard.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.less']
})
export class ModalEditComponent implements OnInit {
  isVisible = false;
  conditionState = 1;
  leaseEditing: any
  constructor(private fb: FormBuilder, private dashboardHTTP: DashboardService) { }
  form: any;
  ngOnInit(): void {
    this.createForm()

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
    this.dashboardHTTP.EditLease(this.leaseEditing.id, this.form.getRawValue()).subscribe({
      next: response => {
        console.log(response);
      }
    })
    this.isVisible = false;
  }



  OnChangeCondition(): void {
    this.conditionState = this.form.get('condition').value
    console.log(this.conditionState);
  }
  showModal(): void {
    this.isVisible = true;
    setTimeout(() => {
      let p = localStorage.getItem('leaseToEdit')
      this.leaseEditing = JSON.parse(p!);
      this.form.patchValue(this.leaseEditing)
    }, 100)
  }



  handleCancel(): void {
    this.isVisible = false;
  }
}
