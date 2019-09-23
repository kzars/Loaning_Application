import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PaybacksService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getPaybacks() {
    return this._http.get(this.myAppUrl + 'api/Paybacks/Index')
      .catch(this.errorHandler);
  }

  savePaybacks(paybacks) {
    return this._http.post(this.myAppUrl + 'api/Paybacks/Create', paybacks)
      .catch(this.errorHandler)
  } 

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
