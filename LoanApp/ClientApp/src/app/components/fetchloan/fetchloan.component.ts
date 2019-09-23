import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LoansService } from '../../services/lonservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './fetchloan.component.html'
})

export class FetchLoansComponent {
  public lonList: LoansData[];

  constructor(public http: HttpClient, private _router: Router, private _loansService: LoansService) {
    this.getLoans();
  }

  getLoans() {
    this._loansService.getLoans().subscribe(
      data => this.lonList = data
    )
  }
}

interface LoansData {
  Id: number;
  Loaner: number;
  Borrower: number;
  Amount: number;
}
