import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'

  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'proyects',
    component: ProyectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
