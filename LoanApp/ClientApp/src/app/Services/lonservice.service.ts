import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoansService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getLoans() {
    return this._http.get(this.myAppUrl + 'api/Loans/Index')
      .catch(this.errorHandler);
  }

  saveLoans(loans) {
    return this._http.post(this.myAppUrl + 'api/Loans/Create', loans)
      .catch(this.errorHandler)
  } 

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
