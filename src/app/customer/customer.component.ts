import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Customer } from 'src/Dtos/Customer/customer';
import { CustomerService } from '../Services/Customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers: Customer[] = [];

  constructor(public customerService: CustomerService) { }
  ngOnInit(): void {
    this.customerService.GetAll().subscribe((data: Customer[]) => {
      this.customers = data;
      console.log(this.customers);
    });
  }
  
  

  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe(res => {
      this.customers.filter(cus => cus.id !== id)
      console.log('deleted successfully!');

    });
  }
}
