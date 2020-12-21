import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';
import { HomePageComponent } from '../home-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  email = ''
  password = ''
  firstName = ''
  lastName = ''
  cpassword = ''
  date = ''
  gender = ''
  formFetch = false
  disable = false
  error = false
  validation = false

  constructor(
    private UserService:UserService, 
    private state: AppComponent, 
    private home:HomePageComponent,
    private router:Router
    ) { }

  ngOnInit() {
    setTimeout(() => {
      this.home.pageRouteBool = {
        filOpen: true,
        currentPage: 'register',
        lastPage: this.home.pageRouteBool.lastPage
      }
    }, 300)
  }

  nextStep () {
    this.validation = true
    document.getElementById('email').classList.remove('error')
    document.getElementById('password').classList.remove('error')
    document.getElementById('cpassword').classList.remove('error')
    const regex = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    let intError = false
    if ( this.email !== '' && this.password !== '') {
      if ( !regex.test(this.email) ) { 
        console.log(regex.test(this.email));
        document.getElementById('email').classList.add('error')
        intError = true
       }
      if ( this.password !== this.cpassword ) { 
        document.getElementById('password').classList.add('error')
        document.getElementById('cpassword').classList.add('error')
        intError = true
      } else {
        setTimeout(() => {
          document.getElementsByClassName('load-password')[0].classList.add('complete')
          document.getElementsByClassName('load-password')[1].classList.add('complete')
        }, 100)
      }
      if (!intError) {
        this.error = false
        this.UserService.emailExits(this.email, this.state.user.token)
          .subscribe(
            data => {
              console.log(data)
              if ( data.response ) {
                document.getElementsByClassName('load-email')[0].classList.add('complete')
                document.getElementById('slideForms').classList.add('nextStep')
              } else {
                document.getElementById('email').classList.add('error')
              }
          },
            error => {
              document.getElementById('email').classList.add('error')
            }
          )
      }
    } else {
      this.error = true
    }
  }

  prevStep () {
    document.getElementById('slideForms').classList.remove('nextStep')
  }

  submitEvent () {
    this.formFetch = true
    this.error = false
    if ( this.firstName === '' || this.lastName === '' ) {
      document.getElementById('fname').classList.add('error')
      document.getElementById('lname').classList.add('error')
    } else {
      const postData = {
        email: this.email, 
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        dob: this.date,
        gender: this.gender,
        type: 'test'
      }
      this.UserService.registerUser(postData, this.state.user.token)
        .subscribe(
          data => {
            this.state.updateToken(data.token)
            this.router.navigate([''])
          },
          error => {}
        )
    }
  }
}
