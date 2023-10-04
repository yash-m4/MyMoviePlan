import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private route:ActivatedRoute,private sharedService: SharedService, private router:Router, private http:HttpClient){}

  search:string=''
  genres:any []=[]
  movies:any[]=[]
  showReinitializeButton = false;
  currentImageIndex = 0;
  showAll:boolean=false

imageUrls: string[] = [
  '../../assets/2015-revenant-movie-poster.jpg',
  '../../assets/inception coming soon.jpg',
  '../../assets/world-war-z-comming soon.jpg'
];
ngOnInit(): void {
this.showAll=false

  this.http.get<any>('http://localhost:8080/admin/viewAllGenre').subscribe(
    (res:any)=>{
      this.genres=res;

    }
    ,(error)=>{
      console.log(error)
    }
  )
 

  this.http.get<any[]>('http://localhost:8080/customer/viewAllMoviesCustomer').subscribe(
    (response: any[]) => {
      this.movies = response;
    },
    (error) => {
      console.error('Error loading Movies:', error);
    }
  );
  this.showReinitializeButton = false;
    setInterval(() => {
      this.showNextImage();
    }, 2000);
}
getBase64Image(base64Data: string): string {
  return 'data:image/jpeg;base64,' + base64Data;
}
showNextImage() {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
}

searchProduct(){
  this.showAll= true;
  const formdata=new FormData();
  formdata.append('key',this.search)
  this.http.post<any[]>('http://localhost:8080/customer/filterBySearchBar',formdata).subscribe(
    (response: any[]) => {
      this.movies = response;
    },
    (error) => {
      console.error('Error loading products:', error);
    }
  );

}
selectCategory(id:number){

  const formdata=new FormData();
  formdata.append('id',id.toString());
  this.http.post<any[]>('http://localhost:8080/customer/filterByGenre',formdata).subscribe(
    (response: any[]) => {
      this.movies = response;
      this.showAll=true
    },
    (error) => {
      console.error('Error loading movies:', error);
    }
  );

}
buyNow(){
  this.sharedService.triggerSignUp();
}
showAllmethod(){
  this.showAll=false;
  this.ngOnInit();
}
}

