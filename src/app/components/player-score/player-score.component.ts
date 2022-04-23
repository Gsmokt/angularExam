import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MyServiceService, User } from 'src/app/my-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss']
})
export class PlayerScoreComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  public name: string = '';
  public sort: boolean = false;
  public data: Array<User> = []; 
  public interval:any;

  sortToggle(){
    this.sort = !this.sort;
  }
  constructor(private MyService: MyServiceService, private _router: Router, private location: Location) {}
   public goB(){
    this.location.back();
     }
  ngOnInit(): void {
    this.name = this.MyService.name;
    this.MyService.load().subscribe((result) => {
      this.data = result;
  })
    this.interval = setInterval(() => {
      this.MyService.load().subscribe((result) => {
        this.data = result;
    })
    },30000)
  }
  ngOnDestroy(){
    clearInterval(this.interval);
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
   }
}
