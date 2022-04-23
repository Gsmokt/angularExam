import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() game: any;
  @Input() status: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
