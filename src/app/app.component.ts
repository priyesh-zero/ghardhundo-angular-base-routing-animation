import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ghardhundho';
  
  user = {
    token: '',
    firstName: '',
    type: '',
    signIn: false
  }

  constructor(private UserService: UserService) { }

  ngOnInit() {
    if(!(typeof(localStorage.getItem("token"))=='undefined')){
      this.updateToken(localStorage.getItem("token"))
    } else {
      this.logout()
    }
  }

  logout() {
    this.UserService.guest()
      .subscribe(data => {
        this.updateToken(data.token)
      })
  }

  updateToken (token) {
    this.user.token = token
    localStorage.setItem('token', token)
    this.updateUser(token)
  }

  updateUser (token) {
    this.UserService.getUserInfo(token)
      .subscribe(
        data => {
          this.user = {
            ...this.user,
            ...data,
            signIn: true
          }
          if (this.user.type == 'guest') {
            this.user = {
              token: this.user.token,
              firstName: 'Guest',
              type: 'guest',
              signIn: false
            }
          }
        },
        error => {
          this.logout()
        }
      )
  }
}
