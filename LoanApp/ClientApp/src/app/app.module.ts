import { NgModule } from '@angular/core';
import { PeopleService } from './services/prsservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchPeopleComponent } from './components/fetchperson/fetchperson.component';
import { createperson } from './components/addperson/AddPerson.component';
import { FetchLoansComponent } from './components/fetchloan/fetchloan.component';
import { createloan } from './components/addloan/AddLoan.component';
import { FetchPaybacksComponent } from './components/fetchpaybacks/fetchpaybacks.component';
import { createpaybacks } from './components/addpaybacks/Addpaybacks.component';
import { HttpClientModule } from '@angular/common/http';
import { LoansService } from './services/lonservice.service';
import { PaybacksService } from './services/payservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchPeopleComponent,
    FetchLoansComponent,
    FetchPaybacksComponent,
    createperson,
    createloan,
    createpaybacks
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-person', component: FetchPeopleComponent },
      { path: 'register-person', component: createperson },
      { path: 'fetch-loans', component: FetchLoansComponent },
      { path: 'register-loans', component: createloan },
      { path: 'fetch-paybacks', component: FetchPaybacksComponent },
      { path: 'register-paybacks', component: createpaybacks },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    PeopleService,
    LoansService,
    PaybacksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
