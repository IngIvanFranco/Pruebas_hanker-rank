import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
   
     
      alerterror:boolean
      formulariologin:FormGroup
      respuesta :[]

  constructor(
    private readonly router: Router,
    public formulario:FormBuilder,
    private serviciologin:LoginService
  ) {
    this.formulariologin = this.formulario.group({
      email:['',[Validators.email, Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit(): void {

  }



  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }


 public login(){
   
    if (this.formulariologin.valid) {
     
this.serviciologin.login(this.formulariologin.value).subscribe(res => {
  this.respuesta =res
  this.alerterror=false

  if (this.respuesta['token']) {
  
    localStorage.setItem('token',this.respuesta['token'])
    this.redirectUsers()
  }
  
}, err=>{
  
  
  this.alerterror=true
})



   }else{
    
    this.alerterror=true
   }
 

    }

}
