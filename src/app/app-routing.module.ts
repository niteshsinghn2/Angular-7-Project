import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
const routes: Routes = [
{ path: 'login', component: LoginComponent },
 {path:'dashboard', component:DashboardComponent},
 {path:'about', component:AboutComponent},
 {path:'heroes', component:HeroesComponent},
 {path:'contact', component:ContactComponent},
 {path:'modal', component:ModalComponent},
 {path : '', component : LoginComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
