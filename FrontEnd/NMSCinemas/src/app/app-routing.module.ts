import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admincomponents/admin-dashboard/admin-dashboard.component';
import { AddMovieComponent } from './components/admincomponents/add-movie/add-movie.component';
import { AddGenreComponent } from './components/admincomponents/add-genre/add-genre.component';
import { EditGenreComponent } from './components/admincomponents/edit-genre/edit-genre.component';
import { EditMoviesComponent } from './components/admincomponents/edit-movies/edit-movies.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerDashboardComponent } from './components/customerComponents/customer-dashboard/customer-dashboard.component';
import { CartComponent } from './components/customerComponents/cart/cart.component';
import { PaymentComponent } from './components/customerComponents/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent,children:[
      {
        path:'login',
        component:LoginComponent
      }
    ]
  },
  {
    path: 'adminDashboard',
    component:AdminDashboardComponent,children:[
     {
    path: 'adminMovies',
    component:AddMovieComponent
  },
  {
    path: 'adminGenre',
    component:AddGenreComponent
  },
  {
    path: 'adminEditGenre',
    component:EditGenreComponent
  }, 
  {
    path: 'adminEditMovie',
    component:EditMoviesComponent
  } 
    ]
  }
  ,{
    path:'customer',
    component:CustomerDashboardComponent
  }
  ,{
    path:'cart',
    component:CartComponent
  }
  ,{
    path:'payment',
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
