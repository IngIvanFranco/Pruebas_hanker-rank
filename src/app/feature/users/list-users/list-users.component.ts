import { Component, OnInit } from '@angular/core';
import { Report } from 'notiflix';
import { UsersService } from '../create-user/shared/services/users/users.service';





@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  data:[]
  usrs:[]
  filterUserByName=''

  constructor(private conexapi:UsersService,){

  }
  ngOnInit(){
  this.list_usr()  
  }

list_usr(){
this.conexapi.getUsers().subscribe(res=>{
  this.data=res
  this.usrs = this.data['data']
  
},err=>{
  console.log(err);
  
})
}

deleteusr(id,firtsname,lastname,index){
 
 this.conexapi.deleteUserForIndex(id).subscribe(res=>{
  Report.success(
    'Ceiba Notificacion',
    `Se ha eliminado el Usuario </br> -${firtsname} ${lastname}`,
    'Ok'
  )
  this.usrs.splice(index,1)
 }, err=>{
  Report.failure(
    'Ceiba Notificacion',
    `No se ha eliminado el Usuario </br> -${firtsname} ${lastname}`,
    'Ok'
  )

 })
}

}
