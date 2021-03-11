import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
date:any;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date().getTime();
    console.log("this.date",this.date);

  }

}
