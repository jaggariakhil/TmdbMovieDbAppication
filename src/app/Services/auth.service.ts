import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { tap, map, filter, retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  sessionId='';
   requestToken:string='';
   isAuthenticated=false;
  private expiresAt:string='';
  loggedin=false;
  loginUpdate=new Subject<boolean>();


  constructor(private http:HttpClient,private router:Router) { }

  onLogin(name:string,password:string):boolean{
    this.loggedIn=true;
    this.loginUpdate.next(this.loggedIn);
    
   // console.log("called");
    this.http.get<{success:boolean,request_token:string,expires_at:string}>("https://api.themoviedb.org/3/authentication/token/new?api_key=b02f177c9cdab086b441e505f1ed0e38").
    subscribe((res)=>{
      console.log("token gen")
      this.requestToken=res.request_token;
      this.expiresAt=res.expires_at;
      console.log(this.requestToken)
      
      


      if(this.requestToken){
        const user={"username": name,
          "password": password,
          "request_token": this.requestToken}
          console.log("user created");
  
          this.http.post<{success:boolean,request_token:string,expires_at:string}>("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=b02f177c9cdab086b441e505f1ed0e38",user)
          .subscribe((res)=>{
            if(!res.success) return ;
            this.loggedin=res.success;
            const reqtoken={"request_token":res.request_token}
            
            console.log("logged in")
            
  this.http.post<{session_id:string,success:true}>("https://api.themoviedb.org/3/authentication/session/new?api_key=b02f177c9cdab086b441e505f1ed0e38",reqtoken)
  .subscribe((res)=>{
this.isAuthenticated=true;
    this.sessionId=res.session_id;
    console.log("session id:"+res.session_id);
    if(this.sessionId)
    this.router.navigate(["/"]);
    
    //console.log("navigatd");
  })
  return this.loggedin;      
  
          },(err)=>{
            this.loggedin=err.error.success;
  
            console.log("Username or password Invalid"+err.error.success);
            return false;
            
          });
  
        }
  
  








    });

 
      return this.loggedin;
    }


  
  
 
  

}





  