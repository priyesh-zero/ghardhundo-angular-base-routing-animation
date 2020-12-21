import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from '../home-page.component';

@Component({
  selector: 'app-home-filter-page',
  templateUrl: './home-filter-page.component.html',
  styleUrls: ['./home-filter-page.component.css']
})
export class HomeFilterPageComponent implements OnInit {

  constructor(private home: HomePageComponent) { }

  ngOnInit() {
    setTimeout(() => {
      this.home.pageRouteBool = {
        filOpen: true,
        currentPage: 'homes',
        lastPage: this.home.pageRouteBool.lastPage
      }
    }, 300)
  }

}
