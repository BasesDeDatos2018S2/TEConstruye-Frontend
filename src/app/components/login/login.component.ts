import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { LoginService } from '../../services/login.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  constructor(private loginService: LoginService) {
    this.user= new User("", "");
  }

  ngOnInit() {
  }
onSubmitLogin(){
  console.log("usuario", this.user);

  this.loginService.login(this.user).subscribe(
        data => {
            console.log("LOGIN Request is successful ", data);
            localStorage.setItem('token', JSON.stringify(data["token"]));

            // this.updateClientList();
        },
        error => {
            console.log("Error", error);
        }
    );

}
}
