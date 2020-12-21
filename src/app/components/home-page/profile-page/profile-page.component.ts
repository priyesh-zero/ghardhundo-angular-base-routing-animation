import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HomePageComponent } from '../home-page.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private state: AppComponent, private homePage: HomePageComponent ) { }

  ngOnInit() {
    setTimeout(() => {
      if ( this.state.user.signIn ) {
        this.homePage.pageRouteBool = {
          filOpen: true,
          currentPage: 'profile',
          lastPage: this.homePage.pageRouteBool.lastPage
        }
      } else {
        this.homePage.pageRouteBool.lastPage = 'profile'
        this.homePage.navigateClick('login')
      }
    }, 300)
  }

}
