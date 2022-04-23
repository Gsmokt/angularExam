import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../game-page/game-page.component';
@Component({
  selector: 'app-gameplay-history',
  templateUrl: './gameplay-history.component.html',
  styleUrls: ['./gameplay-history.component.scss']
})
export class GameplayHistoryComponent implements OnInit {

  public filt: string = 'Player start game';
  public sortList: boolean = true;
  public option: string[] = ['Time played','Total score','Line cleared','Player start game','Player finish game','Player pause game'];
  @Input() public gameplay:Array<Person>;
  
  constructor() {
    this.gameplay = [];
   }
  public sortByDate(){
      this.sortList = !this.sortList;
  };
  public changeAction(name:string){
      this.filt = name;
  };
  
  ngOnInit(): void {
  }



}
