import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class TokenGuard implements CanActivate {
constructor(private rutas:Router)  {

}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (  localStorage.getItem('token')===null ) {
     this.rutas.navigateByUrl('/login')
      return false

    }else{
      return true
    }
  }
  
  
}
