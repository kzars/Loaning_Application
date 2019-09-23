import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchPaybacksComponent } from '../fetchpaybacks/fetchpaybacks.component';
import { PaybacksService } from '../../services/payservice.service';

@Component({
  templateUrl: './AddPaybacks.component.html'
})

export class createpaybacks implements OnInit {
  paybacksForm: FormGroup;
  title: string = "Create";
  Id: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _paybacksService: PaybacksService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.Id = this._avRoute.snapshot.params["id"];
    }

    this.paybacksForm = this._fb.group({
      Id: 0,
      loanId: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  save() {

    if (!this.paybacksForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._paybacksService.savePaybacks(this.paybacksForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-paybacks']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-paybacks']);
  }

  get loanId() { return this.paybacksForm.get('loanId'); }
  get amount() { return this.paybacksForm.get('amount'); }

}
