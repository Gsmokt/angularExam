import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/my-service.service';

@Pipe({
  name: 'sortSliceUsers'
})
export class SortSliceUsersPipe implements PipeTransform {

  transform(gameplay: Array<User>, arg: boolean): Array<User> {
    if(arg === false){
      return gameplay.sort((b,a)=> a.score - b.score);
    }else return gameplay.sort((a,b)=> a.score - b.score); 
  }

}
