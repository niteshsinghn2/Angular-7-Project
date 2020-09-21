import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FilterPipe } from './filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from "@angular/common/http";
import { HeroService } from './hero.service';
import { ContactComponent } from './contact/contact.component';
import { ModalModule } from 'angular-custom-modal';
import { ModalComponent } from './modal/modal.component';
import { AuthenticationService } from './_service/authentication.service';
//import {HttpModule} from '@angular/http';
//import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FilterPipe,
    DashboardComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	NgxPaginationModule,
	HttpClientModule,
	ModalModule
  ],
  providers: [HeroService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
