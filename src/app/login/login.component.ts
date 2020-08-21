import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NavService } from '../Services/nav-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  usernameHardcoded = 'user';
  passwordHardcoded = 'user';
  constructor(private router: Router, private navService: NavService) {}

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
      this.navService.emitNavChangeEvent('loggedin')
      this.router.navigate(['/employee-list'])
    }
  }
}
