import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';
import { HomePageComponent } from '../home-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email = ''
  password = ''
  staySignIn = false
  formFetch = false
  error = false

  constructor(
    private UserService:UserService, 
    private state: AppComponent, 
    private home:HomePageComponent
    ) { }

  ngOnInit() {
    setTimeout(() => {
      this.home.pageRouteBool = {
        filOpen: true,
        currentPage: 'login',
        lastPage: this.home.pageRouteBool.lastPage
      }
    }, 300)
  }

  submitEvent () {
    this.formFetch = true
    this.error = false
    console.log(this.email, this.password)
    if ( this.email === '' && this.password === '' ) {
      this.formFetch = false
      this.error = true
    } else {
      this.UserService.authenticate(this.email, this.password, this.staySignIn, this.state.user.token)
        .subscribe( 
          data => {
            this.state.updateToken(data.token)
            this.formFetch = false
            this.home.navigateClick(this.home.pageRouteBool.lastPage)
          },
          error => {
            console.log(error)
            this.error = true
            this.formFetch = false
          })
    }
  }

}
