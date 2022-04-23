import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() game: any;
  @Input() disableStart: boolean = true;
  @Input() disablePause: boolean = true;
  @Output() setTimer: EventEmitter<any> = new EventEmitter();
  @Output() clearTimer: EventEmitter<any> = new EventEmitter()
  @Output() clearAll: EventEmitter<any> = new EventEmitter();
  
  constructor() { }
  set(){
    this.setTimer.emit();
  }
  clear(){
    this.clearTimer.emit();
  }
  clearall(){
    this.clearAll.emit();
  }

  ngOnInit(): void {
  }

}
