import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  public usernamePattern = "^[A-Za-z0-9_-]{8,15}$";

  constructor(private MyService: MyServiceService,private _router: Router){}
  public color: string = 'sepia';
  public colors: Array<string> = ['sepia', 'normal'];
  public submit(form: FormGroup){
      const name = form.value.name;
      const token = form.value.token;
      if(form.valid){
        this.MyService.setName(name);
        this.MyService.setToken(token);
        this.MyService.sendToken(token);
        console.log('Logged in');
        this._router.navigate(['/game', this.color]);
      }else{
        console.log('Not logged in');
      };
  };

  ngOnInit(): void {
  }

}
