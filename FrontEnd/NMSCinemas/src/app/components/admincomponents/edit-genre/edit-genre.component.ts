import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent {
  genres:any []=[]
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
  }

  deleteCategory(id:number){
    const formdata=new FormData();
    formdata.append('id',id.toString())
    this.http.post<any>('http://localhost:8080/admin/deleteGenre',formdata).subscribe(
      (res:any)=>{
        this.genres=res;
      },
      (error)=>{
        console.log(error)
      }
    )

  }
}
