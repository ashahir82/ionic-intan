import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title: string = "Selamat Datang";
  today: Date = new Date();

  constructor() {
    // this.title = "Welcome to"
  }

  ngOnInit() {
  }

  submit() {
    this.title = "Welcome to"
  }

}
