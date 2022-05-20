import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [  LoginComponent,],
  imports: [

    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,

  
    
  ],
  providers: [ HttpClientModule, ]
  
})
export class LoginModule {
}
