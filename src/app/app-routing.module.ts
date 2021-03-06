import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { AddOrUpdateComponent } from './components/company/add-or-update/add-or-update.component';
import { CountryComponent } from './components/country/country.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [{ path: '', pathMatch: 'full', component: LoginComponent },
{ path: 'company', component: CompanyComponent },
{ path: 'country', component: CountryComponent },
{ path: 'home', component: HomeComponent },
{ path: 'home/:userName', component: HomeComponent },
{ path: 'addcompany', component: AddOrUpdateComponent },
{ path: 'updatecompany/:coCode', component: AddOrUpdateComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [LoginComponent, HomeComponent, CompanyComponent, CountryComponent, AddOrUpdateComponent, NavbarComponent];
