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
    // sessionStorage.clear();
    console.log('in init of login');
    let isLoggedIn = sessionStorage.getItem('isloggedIn');
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
      // storing value to local storage if reload is happend then app wont push for login and timer weill not be set to 0.
      sessionStorage.setItem('isloggedIn', 'true');
      let isLoggedIn = sessionStorage.getItem('isloggedIn');
      console.log(isLoggedIn)
      this.emitValue['loggedIn'] = true;
      // emmitting event to indicate that login is done, start the login count in header component.
      this.navService.emitNavChangeEvent(this.emitValue);

      this.router.navigate(['/employee-list']);
    }
  }
}
