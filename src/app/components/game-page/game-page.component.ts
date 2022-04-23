import { Component, OnInit, ViewChild} from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { MyServiceService } from 'src/app/my-service.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface Person {
  actionName: string,
  timeStamp?: string|number,
  score?: number|string
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public value: boolean = true;
  public hours: number = 0;
  public minutes: number = 0;
  public timer: number = 0;
  public clear: boolean = false;
  public points: number = 0;
  public gameplayHistory: boolean = false;
  public actionGained: Array<Person> = [];
  public status: string = 'Ready?';
  public name: string = '';
  public disableStart: boolean = true;
  public disablePause: boolean = true;
  public color: string = '';
  public colors: Array<string> = ['sepia', 'normal'];

  constructor(private MyService: MyServiceService, private _router: Router, private _route: ActivatedRoute){
    // this.color = this._route.snapshot.params['color'];
    this._route.params.subscribe(params => {
      this.color = params['color'];
    });
  }
  
  @ViewChild('game') private _snake!: NgxSnakeComponent;

  public onChangeValue(value:string[]){
      this.name = value[0];
      this.value = !this.value;
  };

  public gameplay(){
      this.gameplayHistory = !this.gameplayHistory;
  };

  public setTimer(){
      this.disableStart = false;
      this.disablePause = false;
      this.status = 'Started';
      const data = new Date();
      const date = data.toLocaleString();
      this.actionGained.push({actionName:"Player start game", timeStamp: date});
      this.clear = false;
      const interval = setInterval(() => {
        if(this.timer === 60) {
          this.minutes += 1;
          this.timer = 0;
        };
        if(this.minutes === 60){
          this.hours += 1;
          this.minutes = 0;
        };
        if(this.clear === false) this.timer += 1;
        if(this.clear === true) clearInterval(interval);
    },1000)
  };

 public clearTimer(){
      this.disablePause = true;
      this.disableStart = true;
      this.status = 'Paused';
      this.clear = true;
      const data = new Date();
      const date = data.toLocaleString();
      this.actionGained.push({actionName:"Player pause game", timeStamp: date});
 };


  public onGrow() {
      this.points +=1;
      this.actionGained.push({actionName: "Line cleared", timeStamp:`${this.hours} h: ${this.minutes} m: ${this.timer} s`});
  };

  public onGameOver() {
      const data = new Date();
      const date = data.toLocaleString();
      this.clear = true;
      this.actionGained.push( 
                              {actionName:"Player finish game", timeStamp: date},
                              {actionName:"Time played", timeStamp: `${this.hours} h: ${this.minutes} m: ${this.timer+1} s`},
                              {actionName:"Total score", score: this.points?this.points:'0'}   
                            );
      this.disablePause = true;
      this.disableStart = false;
      this.status = "Game over !";
      this.MyService.setScore(this.points);
      this._router.navigate(['/scores-pass']);
  };

  public clearAll(){
      this.points = 0;
      this.timer = 0;
      this.minutes = 0;
      this.hours = 0;
      this.status = 'Ready?';
      this.clear = true;
      this.actionGained = [];
      this.disablePause = true;
      this.disableStart = true;
  };

  public goBack(){
      this.value = !this.value;
      this.points = 0;
      this.timer = 0;
      this.minutes = 0;
      this.hours = 0;
      this.status = 'Ready?';
      this.clear = true;
      this.actionGained = [];
      this.disablePause = true;
      this.disableStart = true;
      this._router.navigate(['/']);
      
  };
  checkGlobalList(){
    this._router.navigate(['/scores']);
  }
  checkPlayerList(){
    this._router.navigate(['/playerscores']);
  }

  ngOnInit(): void {
    this.name = this.MyService.name;
  }

}
