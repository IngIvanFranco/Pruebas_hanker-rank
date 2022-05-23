import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from './shared/interceptor/authorization.service';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';

@NgModule({
  declarations:[
  
    CreateUserComponent,
    ListUsersComponent,
    HomeUserComponent,
    NavBarComponent,
    FilterUserByNamePipe
  ],
  imports:[
    UsersRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  
  ],
  providers:[HttpClientModule,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthorizationService,
      multi:true
    }
  ],
})
export class UsersModule {
}
