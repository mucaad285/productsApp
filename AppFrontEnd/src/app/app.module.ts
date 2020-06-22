import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveproductsComponent } from './saveproducts/saveproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { productsService } from './products.service';
import { LoginComponent } from './login/login.component';
import { CreateuserComponent } from './createuser/createuser.component';


@NgModule({
  declarations: [
    AppComponent,
    SaveproductsComponent,
    LoginComponent,
    CreateuserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [productsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
