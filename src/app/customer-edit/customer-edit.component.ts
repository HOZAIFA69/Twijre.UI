import { NgForm } from '@angular/forms';
import { Customer } from './../../Dtos/Customer/customer';
import { CustomerService } from './../Services/Customer/customer.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {

  customer: Customer;
  id: number;

  constructor(public customerService: CustomerService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.customerService.GetById(this.id).subscribe((data: Customer) => {
      this.customer = data;
    });
  }

  submit(from: NgForm) {
    console.log(from.value);
    this.customerService.edit(from.value).subscribe((data) => {

    });
  }
}
