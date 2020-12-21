import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/home-page/login-page/login-page.component';
import { RegisterPageComponent } from './components/home-page/register-page/register-page.component';
import { HomeFilterPageComponent } from './components/home-page/home-filter-page/home-filter-page.component';
import { ProfilePageComponent } from './components/home-page/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '', 
    component: HomePageComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'login',
      //   pathMatch: 'full'
      // },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'register',
        component: RegisterPageComponent
      },
      {
        path: 'homes',
        component: HomeFilterPageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
