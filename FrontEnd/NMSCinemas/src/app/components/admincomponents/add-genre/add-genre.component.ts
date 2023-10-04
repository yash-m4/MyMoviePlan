import { Component,OnInit,AfterViewInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient  } from '@angular/common/http';


@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent {
  constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient){}
  status:string='true'
  genre: string = '';



  submitForm() {

    const formdata=new FormData();
    formdata.append('status', this.status);
    formdata.append('genre', this.genre);
    console.log(formdata)
    this.http.post('http://localhost:8080/admin/addGenre',formdata).subscribe(
      (response)=>{
        alert('Category is Succesfully Added')

      },
      (error)=>{
        console.log(error)
      }
    )

    
}
}