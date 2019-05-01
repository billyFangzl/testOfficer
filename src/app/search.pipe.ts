import { Pipe, PipeTransform } from '@angular/core';
import {Officer} from './officer/officer';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(officers: Officer[], value: string){
    if(!officers) return [];
    if(!value) return officers;
    return officers.filter(v=>{
      return v.lastname.toLowerCase().indexOf(value.toLowerCase()) !==-1
    });
  }

}
