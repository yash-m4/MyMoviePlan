import { Component,OnInit,AfterViewInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient  } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogin:boolean=true
  firstName:string=''
  lastName:string=''
  phone:number=0
  password:string=''
  email:string=''
  message:boolean=false;
  constructor(private dialogRef: MatDialogRef<LoginComponent> ,private route:ActivatedRoute, private router:Router, private http:HttpClient){}
  login(){
    const formdata=new FormData();
    formdata.append('email', this.email);
    formdata.append('password', this.password);
    console.log(formdata)
    this.http.post('http://localhost:8080/auth/login',formdata).subscribe(
      (response:any)=>{
        if(response.isValid==true){
          if(response.isAdmin==false){
            
            sessionStorage.setItem('isLoggedIn','true');
            sessionStorage.setItem('email',this.email);
            this.dialogRef.close('success');
            this.router.navigate(['/customer']);

          }
          else{
            sessionStorage.setItem('isLoggedIn','true');
            sessionStorage.setItem('email',this.email);
            this.dialogRef.close('success');
            this.router.navigate(['/adminDashboard']);
          }
        }
        else{
          sessionStorage.removeItem('isLoggedIn')
          alert('Invalid Username or Password')
        }
      },
      (error)=>{
        sessionStorage.removeItem('isLoggedIn')
        alert('Invalid Username or Password')
        console.log(error)
      }
    )
  }

register(){
  const formdata=new FormData();
  formdata.append('email', this.email);
  formdata.append('password', this.password);
  formdata.append('firstName', this.firstName);
  formdata.append('lastName', this.lastName);
  formdata.append('phone', this.phone.toString());
  console.log(formdata)
  this.http.post('http://localhost:8080/auth/addUser',formdata).subscribe(
    (response)=>{
    alert('Registration Succesfull, Please Login To Continue') 
    this.firstName=''
    this.lastName=''
    this.phone=0
    this.password=''
    this.email=''
    this.isLogin=true
    },
    (error)=>{
      console.log(error)
    }
  )
}

  lTOr(){
    if(this.isLogin===true){
      this.isLogin=false
    }
    else{
      this.isLogin=true
    }
  }


}
