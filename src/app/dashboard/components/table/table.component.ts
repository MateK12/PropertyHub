import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

interface ParentItemData {
  id: number;
  key: number;
  addres: string;
  tenant: string;
  amount: number;
  paid: string;
  edit: string;
  delete: string;
  expand: boolean;
  propertyCost: number;
  contact: string;
  condition: string;
  observation: string
}

interface ChildrenItemData {
  key: number;
  name: string;
  date: string;
  upgradeNum: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent {
  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];
  constructor(private TableService: LoginServiceService) { }
  ngOnInit(): void {
    this.TableService.GetLeases(localStorage.getItem('userID')).subscribe({
      next: response => {
        response.forEach((property: any) => {
          property.expand = false
        });

        console.log(response);
        this.listOfParentData = response

      }
    })


  }
  Logsmth(log: any) {
    console.log(log);
    console.log(typeof (log));
  }
  OnEdit(data: any) {
    console.log(data);
    let leaseToEdit = JSON.stringify(data);
    localStorage.setItem('leaseToEdit', leaseToEdit)
  }
}
