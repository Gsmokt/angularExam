import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyServiceService } from './my-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataGuardGuard implements CanActivate {
  constructor(private MyService: MyServiceService, private _router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.MyService.name){
      return true;
    }else {
      return this._router.createUrlTree(['/']);
    }
  }
}
