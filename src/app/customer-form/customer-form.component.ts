import { CustomerCreate } from './../../Dtos/Customer/customerCreate';
import { CustomerService } from './../Services/Customer/customer.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  
  constructor(
    public customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
   
  }

  submit(form:NgForm) {
    console.log(form.value);
    this.customerService.create(form.value).subscribe(
      ()=>{
        this.router.navigateByUrl("");
      }
    );
  }
}