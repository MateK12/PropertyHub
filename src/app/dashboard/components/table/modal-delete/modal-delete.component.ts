import { Component, Input } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {
  @Input() propertyToDelete: any;
  isVisible = false;

  constructor(private dashboardService: DashboardService) { }

  showModal(): void {
    this.isVisible = true;
  }

  DeleteProperty(): void {
    console.log('This is the id: ' + this.propertyToDelete);
    this.dashboardService.DeleteLease(this.propertyToDelete).subscribe({
      next: response => {
        console.log(response);
      }

    })
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
