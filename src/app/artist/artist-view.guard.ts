import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistViewGuard implements CanActivate {
  
  constructor(private router:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let id = +next.url[1].path;
    if(isNaN(id) || id<1)
    {
      alert("Invalid Artist ID")
      this.router.navigate(['/artists']);
      return false;
    };    
      return true;
  }
  
}
