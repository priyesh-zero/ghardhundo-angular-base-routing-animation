import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  index = 1

  constructor(private state: HomePageComponent) { }

  ngOnInit() {
  }

  nextSlide () {
    let parentChild = document.getElementsByClassName('slideShowSlides')
    let len = parentChild.length
    let cur = document.getElementById('s'+this.index)
    let next = cur.nextElementSibling===null?parentChild[0]:cur.nextElementSibling
    this.index = this.index==len?1:this.index+1
    cur.style.animation = 'leaveRight 0.5s ease-in-out 0s forwards'
    document.getElementById(next.id).style.animation = 'enterLeft 0.5s ease-in-out 0s forwards'
  }

  prevSlide () {
    let parentChild = document.getElementsByClassName('slideShowSlides')
    let len = parentChild.length
    let cur = document.getElementById('s'+this.index)
    let next = cur.previousElementSibling===null?parentChild[len-1]:cur.previousElementSibling
    this.index = this.index==1?len:this.index-1
    cur.style.animation = 'leaveLeft 0.5s ease-in-out 0s forwards'
    document.getElementById(next.id).style.animation = 'enterRight 0.5s ease-in-out 0s forwards'
  }

}
