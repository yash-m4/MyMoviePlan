import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit{
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

  genres:any []=[]
  movies:any[]=[]

  constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient){}
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
  
  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      this.image = inputElement.files[0];
    }
  }
  
  
  submitForm() {
    // this.addMovie.name=this.movie;
    // this.addMovie.genreId=this.selectedGenre;
    // this.addMovie.status=this.status;
    // this.addMovie.price=this.price
    // this.addMovie.releaseDate=this.releaseDate
    // this.addMovie.slots=this.selectedSlots
    // this.addMovie.language=this.selectedLanguages
    // this.addMovie.image=this.image as Blob;

 const formdata=new FormData();
 formdata.append('movie',this.movie)
 formdata.append('genreId',this.selectedGenre.toString())
 formdata.append('status',this.status.toString())
 formdata.append('price',this.price.toString())
  formdata.append('releaseDate',this.releaseDate.toString())
  formdata.append('slots',this.selectedSlots)
  formdata.append('language',this.selectedLanguages)
  formdata.append('image',this.image as File)
    
  

  
    this.http.post('http://localhost:8080/admin/addMovie', formdata)
      .subscribe(
        response => {
          // Handle success response
          console.log(response);
          alert("Item Added Successfully!");
        },
        error => {
          // Handle error response
          console.error(error);
        }
      );
  }
 
  
  
  }
