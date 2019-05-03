import { Pipe, PipeTransform } from '@angular/core';
import { Officer } from './officer/officer';

@Pipe({
  name: 'searchbyFirstName'
})
export class SearchbyFirstNamePipe implements PipeTransform {

  transform(officers: Officer[], value: string){
    if(!officers) return [];
    if(!value) return officers;
    return officers.filter(v=>{
      return v.first_name.toLowerCase().indexOf(value.toLowerCase()) !==-1
    });
  }
}
