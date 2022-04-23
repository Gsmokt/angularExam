import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-score-pass',
  templateUrl: './score-pass.component.html',
  styleUrls: ['./score-pass.component.scss']
})
export class ScorePassComponent implements OnInit {
  public name: string = '';
  public score: number = 0;
  sendData(){
    this.MyService.sendPlayerData();
    this.location.back();
  }
  reject(){
    this.location.back();
  }
  constructor(private MyService: MyServiceService, private _router: Router, private location: Location) {}

  ngOnInit(): void {
    this.name = this.MyService.name;
    this.score = this.MyService.score;
  }

}
