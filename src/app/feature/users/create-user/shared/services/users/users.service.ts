import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private api:String = 'https://reqres.in/api/users';
  

  constructor(
    private conexapi:HttpClient
  ) { }

 public getUsers():Observable<any> {
    return this.conexapi.get(`${this.api}?page=1`)
  }

  createUser(user) {
return this.conexapi.post(`${this.api}`,user)
  }

  deleteUserForIndex(index: number) {
    return this.conexapi.delete(`${this.api}/${index}`)
  }
}
