import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private api:String = 'https://reqres.in/api/login';


  constructor(
    private conexapi:HttpClient,
    public router:Router
  ){

  }
  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(loginform):Observable<any>{


  return  this.conexapi.post(`${this.api}`,loginform)
    
  
  }
}
