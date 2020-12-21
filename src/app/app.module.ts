import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/home-page/login-page/login-page.component';
import { RegisterPageComponent } from './components/home-page/register-page/register-page.component';
import { HomeFilterPageComponent } from './components/home-page/home-filter-page/home-filter-page.component';
import { CookFilterPageComponent } from './components/home-page/cook-filter-page/cook-filter-page.component';
import { MaidFilterPageComponent } from './components/home-page/maid-filter-page/maid-filter-page.component';
import { ProfilePageComponent } from './components/home-page/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    NavbarComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomeFilterPageComponent,
    CookFilterPageComponent,
    MaidFilterPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
