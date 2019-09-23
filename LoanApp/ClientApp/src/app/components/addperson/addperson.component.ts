import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchPeopleComponent } from '../fetchperson/fetchperson.component';
import { PeopleService } from '../../services/prsservice.service';

@Component({
  templateUrl: './AddPerson.component.html'
})

export class createperson implements OnInit {
  personForm: FormGroup;
  title: string = "Create";
  Id: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _peopleService: PeopleService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.Id = this._avRoute.snapshot.params["id"];
    }

    this.personForm = this._fb.group({
      Id: 0,
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  save() {

    if (!this.personForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._peopleService.savePerson(this.personForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-person']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-person']);
  }

  get name() { return this.personForm.get('name'); }
  get surname() { return this.personForm.get('surname'); }

}
