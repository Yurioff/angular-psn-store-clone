import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-btn',
  templateUrl: './big-card-btn.component.html',
  styleUrls: ['./big-card-btn.component.css']
})
export class BigCardBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playNow(): void {
    const playUrl = "#";
    window.location.href = playUrl
  }
  buyNow(): void {
    const buyUrl = "#";
    window.location.href = buyUrl;
  }

}
