import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admincomponents/admin-dashboard/admin-dashboard.component';
import { AddGenreComponent } from './components/admincomponents/add-genre/add-genre.component';
import { AddMovieComponent } from './components/admincomponents/add-movie/add-movie.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditMoviesComponent } from './components/admincomponents/edit-movies/edit-movies.component';
import { EditGenreComponent } from './components/admincomponents/edit-genre/edit-genre.component';
import { EditSingleMovieComponent } from './components/admincomponents/edit-single-movie/edit-single-movie.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerDashboardComponent } from './components/customerComponents/customer-dashboard/customer-dashboard.component';
import { CartComponent } from './components/customerComponents/cart/cart.component';
import { PaymentComponent } from './components/customerComponents/payment/payment.component';
import { OrderHistoryComponent } from './components/customerComponents/order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    AdminDashboardComponent,
    AddGenreComponent,
    AddMovieComponent,
    DashboardComponent,
    EditMoviesComponent,
    EditGenreComponent,
    EditSingleMovieComponent,
    LoginComponent,
    CustomerDashboardComponent,
    CartComponent,
    PaymentComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
