import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qwipo-web-apps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // constructor() { }

  ngOnInit(): void {
    console.log('this is home');
  }
}