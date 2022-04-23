import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './components/game-page/game-page.component';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(gameplay: Array<Person>, filtr:string): Array<Person> {
    return gameplay.filter(item => item.actionName === filtr)
  }

}
