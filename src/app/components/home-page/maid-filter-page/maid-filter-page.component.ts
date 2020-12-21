import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from '../home-page.component';

@Component({
  selector: 'app-maid-filter-page',
  templateUrl: './maid-filter-page.component.html',
  styleUrls: ['./maid-filter-page.component.css']
})
export class MaidFilterPageComponent implements OnInit {

  constructor(private home: HomePageComponent) { }

  ngOnInit() {
    setTimeout(() => {
      this.home.pageRouteBool = {
        filOpen: true,
        currentPage: 'maids',
        lastPage: this.home.pageRouteBool.lastPage
      }
    }, 300)
  }

}
