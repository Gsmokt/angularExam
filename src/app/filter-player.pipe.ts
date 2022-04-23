import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/my-service.service';

@Pipe({
  name: 'filterPlayer'
})
export class FilterPlayerPipe implements PipeTransform {

  transform(gameplay: Array<User>, filtr:string): Array<User> {
    return gameplay.filter(item => item.name === filtr);
  }

}
