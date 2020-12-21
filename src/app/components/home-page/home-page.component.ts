import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pageRouteBool = {
    filOpen: false,
    currentPage: '',
    lastPage: ''
  }

  constructor(private router: Router, private state: AppComponent) { }

  ngOnInit() { 
    setTimeout(() => {
      this.pageRouteBool = {
        filOpen: false,
        currentPage: '',
        lastPage: this.pageRouteBool.lastPage
      }
    }, 100)
   }

  navigateClick (newPage) {
    if (!(this.pageRouteBool.currentPage == newPage)) {
      if (this.pageRouteBool.filOpen) {
        this.pageRouteBool.filOpen = !this.pageRouteBool.filOpen
        setTimeout(() => {
          this.pageRouteBool = {
            filOpen: true,
            lastPage: this.pageRouteBool.currentPage,
            currentPage: newPage
          }
          this.router.navigate([newPage])
        }, 700)
      } else {
        this.pageRouteBool = {
          filOpen: newPage !== '/',
          lastPage: this.pageRouteBool.currentPage,
          currentPage: newPage
        }
        this.router.navigate([newPage])
      }
    }
  }

  backButton () {
    if (!(this.pageRouteBool.currentPage == this.pageRouteBool.lastPage)) {
      if (this.pageRouteBool.filOpen) {
        this.pageRouteBool.filOpen = !this.pageRouteBool.filOpen
        setTimeout(() => {
          this.pageRouteBool = {
            filOpen: this.pageRouteBool.lastPage===''? false: true,
            currentPage: this.pageRouteBool.lastPage,
            lastPage: this.pageRouteBool.lastPage
          }
          this.router.navigate([this.pageRouteBool.lastPage])
        }, 700)
      }
    }
  }

  profileClick() {
    if (this.state.user.signIn) {
      this.navigateClick('profile')
    } else {
      this.navigateClick('login')
    }
  }

}
