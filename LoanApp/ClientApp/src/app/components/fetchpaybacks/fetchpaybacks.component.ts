import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PaybacksService } from '../../services/payservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './fetchpaybacks.component.html'
})

export class FetchPaybacksComponent {
  public payList: PaybacksData[];

  constructor(public http: HttpClient, private _router: Router, private _paybacksService: PaybacksService) {
    this.getPaybacks();
  }

  getPaybacks() {
    this._paybacksService.getPaybacks().subscribe(
      data => this.payList = data
    )
  }
}

interface PaybacksData {
  Id: number;
  LoanId: number;
  Amount: number;
}
