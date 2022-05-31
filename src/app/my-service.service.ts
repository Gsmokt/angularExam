import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



export interface User{
  name:string,
  score: number
}

interface Token {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  public name: string = '';
  public token:string|number = '';
  public game: string = 'snake';
  public score: number = 0;

  constructor(private _http: HttpClient, private _router: Router) {
    if(this.name === ''){
      this._router.navigate(['/']);
    }
  }
  setScore(item: number){
    this.score = item;
  }
  setName(item: string){
    this.name = item;
  }
  load(): Observable<Array<User>>{
    const headers = new HttpHeaders({
      Authorization: 'Bearer '+ this.token,
      'Accept': 'application/json',
      "auth-token": `${this.token}`
  });
  const options = { headers };
    const URL = "http://localhost:4700/scores/snake";
    return this._http.get<Array<User>>(URL, options);
  }
  setToken(item: string|number){
    this.token = item;
  }
  sendToken(data:string|number, color:string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer '+this.token,
      'Accept': 'application/json',
      "auth-token": `${this.token}`
  });
  	const body = {
      "auth-token": this.token
    };
    const options = { headers };
    const URL = 'http://localhost:4700/check-token';
    return this._http.post(URL,body, options).toPromise().then(_ => this._router.navigate(['/game', color])).catch(_ => alert('Bad token'));
  }
  sendPlayerData(){
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token,
    'Accept': 'application/json',"auth-token": `${this.token}`});
  const body = {
    name: this.name,
    game: this.game,
    score: this.score,
  }
  const options = { headers };
    const URL = 'http://localhost:4700/scores';
    return this._http.post(URL,body, options).toPromise().then((_) => alert('Got it')).catch(_ => alert('Bad token'));
  }
}
