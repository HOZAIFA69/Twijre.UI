import { RouterModule } from '@angular/router';
import { InvoiceService } from './Services/Invoice/Invoice.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './Services/Customer/customer.service';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FormsModule } from '@angular/forms';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    CustomerViewComponent,
    CustomerEditComponent,
    NavbarComponent,
    InvoiceFormComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'customerView/:id', component: CustomerViewComponent
      },
      {
        path: 'customerEdit/:id', component: CustomerEditComponent
      },
      {
        path: 'invoiceForm/:id', component: InvoiceFormComponent
      },
      {
        path: '', component: CustomerComponent
      },
      {
        path: 'customerForm', component: CustomerFormComponent
      },
      {
        path:'customerEdit',component:CustomerEditComponent
      },
      {
        path:'invoiceForm',component:InvoiceFormComponent
      }
      

    ]

    )
  ],
  providers: [CustomerService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
