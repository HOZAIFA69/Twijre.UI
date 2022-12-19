import { ActivatedRoute, Data } from '@angular/router';
import { InvoiceService } from './../Services/Invoice/Invoice.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { State } from 'src/Dtos/Customer/customer';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent {
  keys = Object.keys;
  stateEnum =State;
  enumKeys =[];
  id :number
 


  constructor(public invoiceService: InvoiceService , private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

    this.enumKeys = Object.keys(this.stateEnum).filter(f => !isNaN(Number(f)));
    console.log(this.enumKeys);
  }

  submit(form: NgForm) {
    debugger;
    form.value.state = parseInt(form.value.state)
    console.log(form.value);
    this.invoiceService.create(form.value).subscribe((data) => {
      console.log(data);
    });
  }
}
