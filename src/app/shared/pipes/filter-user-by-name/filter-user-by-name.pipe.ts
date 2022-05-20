import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(value:any, arg:any ):any{

    if(arg === '' || arg.length < 3) return value
   const resultUsr = [];


   for ( const usr of value){
        if (usr.first_name.toLowerCase().indexOf(arg.toLowerCase()) >- 1) {
          resultUsr.push(usr)
          
        }
   }
   return resultUsr
  }

}
