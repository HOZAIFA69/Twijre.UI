import { Data } from "@angular/router";

export class Customer {
    id: number;
    name: string;
    phone: string;
    invoices: Invoice[]

}

export class Invoice {
    id: number;
    customerId: number;
    invoiceValue: number;
    invoiceDate: Date;
    state: State;
}

export enum State {
    Holy = 0,
    Aljahraa = 1,
}