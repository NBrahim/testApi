import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeUsersComponent} from './liste-users/liste-users.component'

const routes: Routes = [ { path:'', component : ListeUsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
