import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './shared/services/users/users.service';
import { Loading, Report } from 'notiflix';
import { report } from 'process';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
formularioregister:FormGroup
newusr

  constructor(
    private readonly router: Router,
    private conexservice: UsersService,
    private formulario : FormBuilder
  ) {
    this.formularioregister = this.formulario.group({
      name:['',Validators.required],
      job:['',Validators.required]
    })
  }
  ngOnInit(): void {

  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }


public register(){
if (this.formularioregister.valid) {
  Loading.circle()
  this.conexservice.createUser(this.formularioregister.value).subscribe(res=>{
    this.newusr =res

    Loading.remove()
    Report.success(
      'Ceiba notificacion',
      `New User: ${this.newusr['name']}`,
      'ok'
    )
    this.redirectToListUsers()
    
  },err=>{
    Loading.remove()
    Report.failure(
      'Ceiba notificacion',
      `algo salio mal`,
      'ok'
    )
    this.redirectToListUsers()
  })
}
}



}
