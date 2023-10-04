import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
counter:number=0
movieId:number=0
moviee:any;
email: string | null = null;
showPaymentMessage: boolean = false;
cardNumber: string = '';
nameOnCard: string = '';
expiryMonth: string = '';
expiryYear: string = '';
cvv: string = '';

formIsValid: boolean = false;
  constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient){}
  ngOnInit(): void {

    this.email = sessionStorage.getItem('email');

    this.route.queryParams.subscribe((params) => {
      this.movieId = params['movieId'] || '';
      this.counter = params['counter'] || '';
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

  }

  makePayment() {
    this.showPaymentMessage = true;

    // Automatically hide the message after 3 seconds
    setTimeout(() => {
      this.showPaymentMessage = false;
      this.logout(); // Call your logout method here
    }, 3000);
  }
  checkFormValidity() {
    this.formIsValid = this.cardNumber !== '' &&
      this.nameOnCard !== '' &&
      this.expiryMonth !== '' &&
      this.expiryYear !== '' &&
      this.cvv !== '';
  }
  logout() {
    // Implement your logout logic here, e.g., clearing session storage and redirecting
    // For example:
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('isLoggedIn')
    this.router.navigate(['/']); // Redirect to login page after logout
  }

  getBase64Image(base64Data: string): string {
  return 'data:image/jpeg;base64,' + base64Data;
}

}
