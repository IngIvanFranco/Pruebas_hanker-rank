import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeatureRoutingModule } from './feature-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationService } from './users/shared/interceptor/authorization.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[HttpClientModule,
   
  ],
})
export class FeatureModule { }
