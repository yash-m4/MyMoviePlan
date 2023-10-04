import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 // Create a subject to communicate between components
 private signUpSubject = new Subject<void>();

 // Observable to subscribe to in HeaderNavbarComponent
 signUpObservable$ = this.signUpSubject.asObservable();

 // Method to trigger signUp() in HeaderNavbarComponent
 triggerSignUp() {
   this.signUpSubject.next();
 }
}
