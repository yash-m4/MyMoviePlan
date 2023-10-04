import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EditSingleMovieComponent } from '../edit-single-movie/edit-single-movie.component';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit{


  genres:any []=[]
  movies:any[]=[]

  constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient,private dialog: MatDialog){}
  ngOnInit(): void {


    this.http.get<any>('http://localhost:8080/admin/viewAllGenre').subscribe(
      (res:any)=>{
        this.genres=res;

      }
      ,(error)=>{
        console.log(error)
      }
    )
   

    this.http.get<any[]>('http://localhost:8080/admin/viewAllMovies').subscribe(
      (response: any[]) => {
        this.movies = response;
      },
      (error) => {
        console.error('Error loading Movies:', error);
      }
    );
  }
  getBase64Image(base64Data: string): string {
    return 'data:image/jpeg;base64,' + base64Data;
  }
  
  
  changeStatus(id:number){
    const formdata=new FormData();
    formdata.append('id',id.toString())
    this.http.post<any[]>('http://localhost:8080/admin/changeStatus',formdata).subscribe(
      (response: any[]) => {
        this.movies = response;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  editProduct(id: number) {

    const dialogRef = this.dialog.open(EditSingleMovieComponent, {
      width: '20cm',
      height: '15cm',
      data: { 'id': id },
    },
    );

    dialogRef.afterClosed().subscribe(() => {
      // Handle dialog close if needed
    });
  }
  deleteProduct(id:number){
    const formdata=new FormData();
    formdata.append('id',id.toString())

    this.http.post<any[]>('http://localhost:8080/admin/deleteMovie',formdata).subscribe(
      (response: any[]) => {
        this.movies = response;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
}
