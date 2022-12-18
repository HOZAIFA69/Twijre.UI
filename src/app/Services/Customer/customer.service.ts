import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  BaseUrl = "https://localhost:7049/api/Customers/"
  constructor(private httpClient: HttpClient) {

  }

  public GetAll(): Observable<any> {

    return this.httpClient.get(this.BaseUrl + 'GetAll')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  public GetCustomersIncludeInvoice(id:number) :Observable<any> {
    return this.httpClient.get(`${this.BaseUrl}GetCustomersIncludeInvoice/${id}`)
  }
   
  public GetById(id: number): Observable<any> {

    return this.httpClient.get(`${this.BaseUrl}GetById/${id}`)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  public edit(customer) {
    debugger;
    return this.httpClient.put(`${this.BaseUrl}Update/${customer.id}`, customer);
  }

  public create(customer) {
    return this.httpClient.post(this.BaseUrl + "Add", customer);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.BaseUrl}Delete/${id}`)
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
