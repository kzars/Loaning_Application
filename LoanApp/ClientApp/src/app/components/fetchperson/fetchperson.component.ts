import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/prsservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './fetchperson.component.html'
})

export class FetchPeopleComponent {
  public prsList: PersonData[];

  constructor(public http: HttpClient, private _router: Router, private _personService: PeopleService) {
    this.getEmployees();
  }

  getEmployees() {
    this._personService.getPerson().subscribe(
      data => this.prsList = data
    )
  }
}

interface PersonData {
  Id: number;
  Name: string;
  Surname: string;
}
