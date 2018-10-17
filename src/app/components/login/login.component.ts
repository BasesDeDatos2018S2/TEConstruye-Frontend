import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  constructor() {
    this.user= new User("", "");
  }

  ngOnInit() {
  }
onSubmitLogin(){
  console.log(this.user);
}
}
