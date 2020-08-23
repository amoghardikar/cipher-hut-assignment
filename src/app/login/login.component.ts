import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../Services/nav-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  emitValue = {};

  usernameHardcoded = 'user';
  passwordHardcoded = 'user';
  constructor(private router: Router, private navService: NavService) {}

  ngOnInit(): void {
    // localStorage.clear();
    console.log('in init of login');
    let isLoggedIn = localStorage.getItem('isloggedIn');
    console.log(isLoggedIn)
    if (isLoggedIn == 'true') {
      this.router.navigate(['/employee-list']);
    }
  }

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
      localStorage.setItem('isloggedIn', 'true');
      let isLoggedIn = localStorage.getItem('isloggedIn');
      console.log(isLoggedIn)
      this.emitValue['loggedIn'] = true;
      this.navService.emitNavChangeEvent(this.emitValue);

      this.router.navigate(['/employee-list']);
    }
  }
}
