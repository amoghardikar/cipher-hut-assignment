import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  usernameHardcoded = 'user';
  passwordHardcoded = 'user';
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
    if (this.model['username'] !== this.usernameHardcoded) {
      alert('Username is not valid');
    } else if (this.model['password'] !== this.passwordHardcoded) {
      alert('Password is not right');
    } else if (
      this.model['username'] !== this.usernameHardcoded &&
      this.model['password'] !== this.passwordHardcoded
    ) {
      alert('username and password did not match');
    } else {
    }
  }
}
