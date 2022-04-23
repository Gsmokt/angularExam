import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, Subscription, concatMap, timer } from "rxjs";
import { MyServiceService } from 'src/app/my-service.service';
import { User } from 'src/app/my-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit, OnDestroy {
  private _sub!: Subscription;
  private ngUnsubscribe = new Subject<void>();
  public sort: boolean = false;
  public data: Array<User> = [];
  public interval: any;
  constructor(private MyService: MyServiceService, private _router: Router, private location: Location) {};
   public goB(){
 this.location.back();
  };
  sortToggle(){
    this.sort = !this.sort;
  }

  ngOnInit(): void {
  //   this.MyService.load().subscribe((result) => {
  //     this.data = result;
  // })
  //   this.interval = setInterval(() => {
  //     this.MyService.load().subscribe((result) => {
  //       this.data = result;
  //   })
  //   },30000)
  this._sub = timer(0, 30000)
  .pipe(
    concatMap(() => {
      return this.MyService.load()
    })
  )
  .subscribe((data) => {
    this.data = data
  });
  }
  ngOnDestroy(){
    this._sub.unsubscribe();
    // this.
      // clearInterval(this.interval);
      // this.ngUnsubscribe.next();
      // this.ngUnsubscribe.complete();
  }
}
