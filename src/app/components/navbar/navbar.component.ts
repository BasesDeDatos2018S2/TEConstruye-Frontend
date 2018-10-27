import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // current_page:string= "aasas";
  @Input() current_page:string;
  constructor() {
    console.log("current page",this.current_page);
  }

  ngOnInit() {
  }
  logout(){
    localStorage.setItem('token', JSON.stringify(""));
  }

}
