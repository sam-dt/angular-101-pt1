import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codi',
  templateUrl: './codi.component.html',
  styleUrls: ['./codi.component.scss'],
})
export class CodiComponent implements OnInit {
  greeting = 'Hello, world!';
  constructor() {}

  ngOnInit() {}

  onCookie(cookie: string) {
    this.greeting = cookie;
  }
}
