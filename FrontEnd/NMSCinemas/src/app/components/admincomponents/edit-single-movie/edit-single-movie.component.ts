import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-edit-single-movie',
  templateUrl: './edit-single-movie.component.html',
  styleUrls: ['./edit-single-movie.component.css']
})
export class EditSingleMovieComponent implements OnInit{

id:number=0;
genres:any []=[]
moviee:any;

  movie:string=''
  price:number=0
  releaseDate: Date = new Date();
  status:number=0
  image:File|null=null
  slots:string []=['11:00AM to 2:00PM','3:00PM to 6:00PM','7:00PM to 10:00PM']
  languages:string []=['Hindi','English','Tamil','Telugu','Marathi']
  selectedSlots: string = '';
  selectedLanguages: string = '';
  selectedGenre: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: number },private route:ActivatedRoute, private router:Router, private http:HttpClient) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/admin/viewAllGenre').subscribe(
      (res:any)=>{
        this.genres=res;

      }
      ,(error)=>{
        console.log(error)
      }
    )
   
    const formdata=new FormData();
    formdata.append('id',this.id.toString())

    this.http.post<any>('http://localhost:8080/admin/FindById',formdata).subscribe(
      (response: any) => {
        this.moviee = response;
        this.price=this.moviee.price
        this.releaseDate=this.moviee.releaseDate
        this.status=this.moviee.status
        this.selectedSlots=this.moviee.slots
        this.selectedLanguages=this.moviee.language
        this.selectedGenre=this.moviee.genreId
        this.movie=this.moviee.name
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
  getBase64Image(base64Data: string): string {
    return 'data:image/jpeg;base64,' + base64Data;
  }
  
  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      this.image = inputElement.files[0];
    }
  }
  

  submitForm() {

 const formdata=new FormData();
 formdata.append('movie',this.movie)
 formdata.append('genreId',this.selectedGenre.toString())
 formdata.append('status',this.status.toString())
 formdata.append('price',this.price.toString())
  formdata.append('releaseDate',this.releaseDate.toString())
  formdata.append('slots',this.selectedSlots)
  formdata.append('language',this.selectedLanguages)
  formdata.append('id',this.id.toString())
  formdata.append('image',this.image as File)
    
  

  
    this.http.post('http://localhost:8080/admin/editMovie', formdata)
      .subscribe(
        response => {
          // Handle success response
          console.log(response);
          alert("Movie Edited Successfully!");
          this.ngOnInit();
        },
        error => {
          // Handle error response
          console.error(error);
        }
      );
  }
 
  
}
