import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import{SearchComponent}from'./search/search.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'show', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
