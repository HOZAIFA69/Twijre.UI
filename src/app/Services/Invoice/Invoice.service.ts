import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  BaseUrl = "https://localhost:7049/api/Invoices/"

  constructor(private httpClient: HttpClient) { }
  public create(invoice) {
    return this.httpClient.post(this.BaseUrl + "Add", invoice);
  }

  public GetById(id: number): Observable<any> {

    return this.httpClient.get(`${this.BaseUrl}GetById/${id}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  public edit(invoice) {
    return this.httpClient.put(`${this.BaseUrl}Update/${invoice.id}`, invoice);
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
