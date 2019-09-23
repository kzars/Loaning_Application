import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchLoansComponent } from '../fetchloan/fetchloan.component';
import { LoansService } from '../../services/lonservice.service';

@Component({
  templateUrl: './AddLoan.component.html'
})

export class createloan implements OnInit {
  loansForm: FormGroup;
  title: string = "Create";
  Id: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _loansService: LoansService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.Id = this._avRoute.snapshot.params["id"];
    }

    this.loansForm = this._fb.group({
      Id: 0,
      loaner: ['', [Validators.required]],
      borrower: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })
  }

  ngOnInit() {}

  save() {

    if (!this.loansForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._loansService.saveLoans(this.loansForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-loans']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-loans']);
  }

  get loaner() { return this.loansForm.get('loaner'); }
  get borrower() { return this.loansForm.get('borrower'); }
  get amount() { return this.loansForm.get('amount'); }

}
