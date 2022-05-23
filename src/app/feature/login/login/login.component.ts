import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../shared/services/login/login.service';
import { Observable, async } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
   
      token :{}
      alerterror:boolean
      formulariologin:FormGroup
      respuesta :[]

  constructor(
    private readonly router: Router,
    public formulario:FormBuilder,
    private serviciologin:LoginService,
    private rutas:Router
  ) {
    this.formulariologin = this.formulario.group({
      email:['',[Validators.email, Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit(): void {
 
if (localStorage.getItem('token')!=null) {
  this.redirectUsers()
}
  }


  public  login(): void{
      
    
   this.serviciologin.login(this.formulariologin.value).subscribe(res=>{
    
            this.token =res
      localStorage.setItem('token',JSON.stringify(res['token']))

      this.redirectUsers()
    })

  
           
      }



  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }





  



}
