import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qwipo-web-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vendor-ops';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('this is app');
    // this.router.navigate(['/home']);
    // this.router.navigate(['/authentication/login']);
  }
}
