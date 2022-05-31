import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray, FormControlName, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  constructor(private MyService: MyServiceService,private _router: Router, private fb: FormBuilder){
  }
  public color: string = 'sepia';
  public colors: Array<string> = ['sepia', 'normal'];
  public usernamePattern = "^[A-Za-z0-9_-]{8,15}$";
  ngForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.usernamePattern)]],
    token: ['', [Validators.required, Validators.minLength(4)]],
    colorName: [this.color]
  });
  submit(form: FormGroup){
    const name = form.value.name;
    const token = form.value.token;
    if(form.valid){
      this.MyService.setName(name);
      this.MyService.setToken(token);
      this.MyService.sendToken(token, this.color);
      console.log('Logged in');
    }else{
      console.log('Not logged in');
    };
  }

  changeColor(e: any) {
    this.color = e.target.value;
  }

  ngOnInit(): void {

  }


}
