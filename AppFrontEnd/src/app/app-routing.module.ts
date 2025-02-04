import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveproductsComponent } from './saveproducts/saveproducts.component';
import { LoginComponent } from './login/login.component';
import { CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'products', component: SaveproductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createuser', component: CreateuserComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
