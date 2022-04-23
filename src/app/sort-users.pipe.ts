import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/my-service.service';
@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(gameplay: Array<User>): Array<User> {
    return gameplay.sort((b,a)=> a.score - b.score);
  }
}
