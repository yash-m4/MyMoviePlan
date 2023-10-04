import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient){}
  seat:any
  moviee:any;
  movieId:number=0
  isButtonDisabledMap: { [movieId: number]: boolean } = {};
  formIsValid = false;
  seats1:number=0
  seats2:number=0
  seats3:number=0
  seats4:number=0
  seats5:number=0
  seats6:number=0
  seats7:number=0
  seats8:number=0
  seats9:number=0
  seats10:number=0
  seats11:number=0
  seats12:number=0
  seats13:number=0
  seats14:number=0
  seats15:number=0
  seats16:number=0
  seats17:number=0
  seats18:number=0
  seats19:number=0
  seats20:number=0
  counter:number=0
  seatsc1:number=0
  seatsc2:number=0
  seatsc3:number=0
  seatsc4:number=0
  seatsc5:number=0
  seatsc6:number=0
  seatsc7:number=0
  seatsc8:number=0
  seatsc9:number=0
  seatsc10:number=0
  seatsc11:number=0
  seatsc12:number=0
  seatsc13:number=0
  seatsc14:number=0
  seatsc15:number=0
  seatsc16:number=0
  seatsc17:number=0
  seatsc18:number=0
  seatsc19:number=0
  seatsc20:number=0
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      
      this.movieId=params['movieId'] || '';
    });

    const formdata=new FormData();
    formdata.append('id',this.movieId.toString())

    this.http.post<any>('http://localhost:8080/admin/FindById',formdata).subscribe(
      (response: any) => {
        this.moviee = response;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );

    this.http.post<any>('http://localhost:8080/customer/viewSeat',formdata).subscribe(
      (response: any) => {
        this.seat = response;
        this.setSeats();
      },
      (error) => {
        console.error('Error loading seats:', error);
      }
    );

    
    
  }

  setSeats()
{
  this.seats1=this.seat.seat1
  this.seats2=this.seat.seat2
  this.seats3=this.seat.seat3
  this.seats4=this.seat.seat4
  this.seats5=this.seat.seat5
  this.seats6=this.seat.seat6
  this.seats6=this.seat.seat7
  this.seats8=this.seat.seat8
  this.seats9=this.seat.seat9
  this.seats10=this.seat.seat10
  this.seats11=this.seat.seat11
  this.seats12=this.seat.seat12
  this.seats13=this.seat.seat13
  this.seats14=this.seat.seat14
  this.seats15=this.seat.seat15
  this.seats16=this.seat.seat16
  this.seats17=this.seat.seat17
  this.seats18=this.seat.seat18
  this.seats19=this.seat.seat19
  this.seatsc1=this.seat.seat1
  this.seatsc2=this.seat.seat2
  this.seatsc3=this.seat.seat3
  this.seatsc4=this.seat.seat4
  this.seatsc5=this.seat.seat5
  this.seatsc6=this.seat.seat6
  this.seatsc6=this.seat.seat7
  this.seatsc8=this.seat.seat8
  this.seatsc9=this.seat.seat9
  this.seatsc10=this.seat.seat10
  this.seatsc11=this.seat.seat11
  this.seatsc12=this.seat.seat12
  this.seatsc13=this.seat.seat13
  this.seatsc14=this.seat.seat14
  this.seatsc15=this.seat.seat15
  this.seatsc16=this.seat.seat16
  this.seatsc17=this.seat.seat17
  this.seatsc18=this.seat.seat18
  this.seatsc19=this.seat.seat19
  this.seatsc20=this.seat.seat20

}  getBase64Image(base64Data: string): string {
    return 'data:image/jpeg;base64,' + base64Data;
  }


  onClick() {
    if (this.seats1 === 0) {
      this.seats1 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats1 === 1){
      this.seats1 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  onClick2() {
    if (this.seats2 === 0) {
      this.seats2 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats2 === 1){
      this.seats2 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick3() {
    if (this.seats3 === 0) {
      this.seats3 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats3 === 1){
      this.seats3 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick4() {
    if (this.seats4 === 0) {
      this.seats4 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats4 === 1){
      this.seats4 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick5() {
    if (this.seats5 === 0) {
      this.seats5 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats5 === 1){
      this.seats5 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick6() {
    if (this.seats6 === 0) {
      this.seats6 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats6 === 1){
      this.seats6 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick7() {
    if (this.seats7 === 0) {
      this.seats7 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats7 === 1){
      this.seats7 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick8() {
    if (this.seats8 === 0) {
      this.seats8 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats8 === 1){
      this.seats8 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick9() {
    if (this.seats9 === 0) {
      this.seats9 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats9 === 1){
      this.seats9 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick10() {
    if (this.seats10 === 0) {
      this.seats10 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats10 === 1){
      this.seats10 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick11() {
    if (this.seats11 === 0) {
      this.seats11 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats11 === 1){
      this.seats11 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick12() {
    if (this.seats12 === 0) {
      this.seats12 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats12 === 1){
      this.seats4 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick13() {
    if (this.seats13 === 0) {
      this.seats13 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats13 === 1){
      this.seats13 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick14() {
    if (this.seats14 === 0) {
      this.seats14 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats14 === 1){
      this.seats14 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick15() {
    if (this.seats15 === 0) {
      this.seats15 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats15 === 1){
      this.seats15 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick16() {
    if (this.seats16 === 0) {
      this.seats16 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats16 === 1){
      this.seats16 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick17() {
    if (this.seats17 === 0) {
      this.seats17 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats17 === 1){
      this.seats17 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick18() {
    if (this.seats18 === 0) {
      this.seats18 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats18 === 1){
      this.seats18 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick19() {
    if (this.seats19 === 0) {
      this.seats19 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats19 === 1){
      this.seats19 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  
  onClick20() {
    if (this.seats20 === 0) {
      this.seats20 = 1;
      this.counter++
      this.formIsValid=true;
    }else if(this.seats20 === 1){
      this.seats20 = 0;
      this.counter--;
      this.formIsValid=false;
    }
  }
  

  

  payment(){
    // this.http.post('http://localhost:8080/payment',this.selectedProducts).subscribe(
    //   (res)=>{


    // Send the selected seat numbers and movie IDs to your backend or perform any other action
    

        // this.router.navigate(['/payment'], {
        //   queryParams: {
        //     selectedProducts: JSON.stringify(this.selectedMovies ) // Serialize to JSON
        //   }
        // });
        
        const formdata=new FormData();
        formdata.append('seat1',this.seats1.toString());
        formdata.append('seat2',this.seats2.toString());
        formdata.append('seat3',this.seats3.toString());
        formdata.append('seat4',this.seats4.toString());
        formdata.append('seat5',this.seats5.toString());
        formdata.append('seat6',this.seats6.toString());
        formdata.append('seat7',this.seats7.toString());
        formdata.append('seat8',this.seats8.toString());
        formdata.append('seat9',this.seats9.toString());
        formdata.append('seat10',this.seats10.toString());
        formdata.append('seat11',this.seats11.toString());
        formdata.append('seat12',this.seats12.toString());
        formdata.append('seat13',this.seats13.toString());
        formdata.append('seat14',this.seats14.toString());
        formdata.append('seat15',this.seats15.toString());
        formdata.append('seat16',this.seats16.toString());
        formdata.append('seat17',this.seats17.toString());
        formdata.append('seat18',this.seats18.toString());
        formdata.append('seat19',this.seats19.toString());
        formdata.append('seat20',this.seats20.toString());
        formdata.append('id',this.moviee.id.toString());
        this.http.post('http://localhost:8080/customer/bookSeats',formdata).subscribe(
    (response: any) => {
      this.router.navigate(['/payment'], {
          queryParams: {
            counter: this.counter ,
            movieId: this.movieId
          }
        }
        )},
    (error) => {
      console.error('Error loading products:', error);
    }
  );
  }
  checkFormValidity() {
    this.formIsValid = true;
  }
  
}
