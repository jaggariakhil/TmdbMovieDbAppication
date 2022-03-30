import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn=false;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loggedIn=this.authService.loggedIn;

  }
 
loggedinUpdate:Subscription=this.authService.loginUpdate.subscribe((res)=>{
  this.loggedIn=res;
})


  onLogout(){
    console.log("logout");
    this.authService.requestToken=" ";
    this.router.navigate(["/login"]);
    this.loggedIn=false;
    this.authService.isAuthenticated=false;
  }

}
