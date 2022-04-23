import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './components/game-page/game-page.component';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(gameplay: Array<Person>, arg:boolean=false): Array<Person> | undefined{
    if(arg === true)
    return gameplay.reverse();
    if(arg === false)
    return gameplay.reverse();
    else return;
}

}
