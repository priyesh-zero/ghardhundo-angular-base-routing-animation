import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNav = false;

  // signIn = this.state.user.type !== 'guest';

  constructor(private state: AppComponent, private homePage: HomePageComponent) { }

  ngOnInit() { }

  toggleNav () {
    this.showNav = !this.showNav
  }

}
