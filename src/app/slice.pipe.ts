import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/my-service.service';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(gameplay: Array<User>): Array<User> {
    return gameplay.slice(0,11);
  }

}
