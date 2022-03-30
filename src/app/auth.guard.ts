import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./Services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authserv:AuthService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuth=this.authserv.isAuthenticated;
    console.log("iss"+isAuth);
    if(!isAuth){
      this.router.navigate(['/login']);
    }
    return isAuth;

    throw new Error("Method not implemented.");
  }

}