import { InvoiceService } from './../Services/Invoice/Invoice.service';
import { CustomerService } from './../Services/Customer/customer.service';
import { Component } from '@angular/core';
import { Customer } from 'src/Dtos/Customer/customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {

  id: number;
  customer: Customer;

  /**
   *
   */
  constructor(
    public customerService: CustomerService,
    public invoiceService: InvoiceService ,
    private route: ActivatedRoute,
    private router : Router) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.GetCustomersIncludeInvoice(this.id).subscribe((data: Customer) => {
      this.customer = data;
      console.log(this.customer)
    });
  }
  deleteInvoice(id:number){
    this.invoiceService.delete(id).subscribe((data)=>{
      this.customer.invoices.filter(i => i.id !== id)

      console.log(data);
    });
  }


}
