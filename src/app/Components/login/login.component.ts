import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginMsg="";
  loggedin=false;

  constructor(private authServ:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


onLogin(f:NgForm){
  const value=this.authServ.onLogin(f.value.username,f.value.password)
  console.log(value);

  if(value){
    console.log("calling ts")
   this.router.navigate(["/"]);
   this.loggedin=true;
   
  
   }
   else{
    setTimeout(()=>{
      this.loginMsg="Invalid Username or Password";
    },1100)
  
   }
  

  }

}
