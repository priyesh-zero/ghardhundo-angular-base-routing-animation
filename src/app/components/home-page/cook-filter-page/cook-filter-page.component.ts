import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from '../home-page.component';

@Component({
  selector: 'app-cook-filter-page',
  templateUrl: './cook-filter-page.component.html',
  styleUrls: ['./cook-filter-page.component.css']
})
export class CookFilterPageComponent implements OnInit {

  constructor(private home: HomePageComponent) { }

  ngOnInit() {
    setTimeout(() => {
      this.home.pageRouteBool = {
        filOpen: true,
        currentPage: 'cooks',
        lastPage: this.home.pageRouteBool.lastPage
      }
    }, 300)
  }

}
