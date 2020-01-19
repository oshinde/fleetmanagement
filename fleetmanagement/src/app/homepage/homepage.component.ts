import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 
  constructor() { }
  isChecked:boolean = false;
  rental: Date = new Date();
  return: Date = new Date();
  ngOnInit() {
  }

}
