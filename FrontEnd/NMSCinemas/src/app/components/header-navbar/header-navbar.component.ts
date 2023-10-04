import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit{

  constructor(private route:ActivatedRoute,private sharedService: SharedService, private router:Router, private http:HttpClient,private dialog: MatDialog){}


  hide:boolean=false
  ngOnInit(): void {
 
    const check=sessionStorage.getItem('isLoggedIn')
    if(check){
    this.hide=true;
    }else{
      this.hide=false;
    }
    this.sharedService.signUpObservable$.subscribe(() => {
      this.signUp();
    });
}
  signUp(){
  const dialogRef = this.dialog.open(LoginComponent, {
      width: '9cm',
      height: '13cm',
      
    },
    );

    dialogRef.afterClosed().subscribe(() => {
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.hide=true;
        console.log('Login was successful');
        // Handle success
      } else if (result === 'failure') {
        this.hide=false;
        console.log('Login failed');
        // Handle failure
      } else {
        console.log('Dialog was closed without a result');
        // Handle other cases (e.g., if the dialog was closed without a result)
      }
    });
  }
  logOut(){
    sessionStorage.removeItem('isLoggedIn')
    this.hide=false;
    this.router.navigate(['/'])
  }


}
