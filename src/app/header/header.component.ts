import { Component, OnInit } from '@angular/core';
import { NavService } from '../Services/nav-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  subscription: any;
  time = 0;
  sessionTime: any = {};
  loggedInDate;
  interval;
  loggedIn = false;
  loggedinstorageValue;
  constructor(private navService: NavService, private router: Router) {}

  ngOnInit(): void {
    console.log('in header init');
    this.loggedinstorageValue = localStorage.getItem('isloggedIn');
    console.log(this.loggedinstorageValue);
    if (
      this.loggedinstorageValue !== null &&
      this.loggedinstorageValue == 'true'
    ) {
      this.loggedIn = true;
      this.time = Number(localStorage.getItem('loggedinTime'));
      this.startTimer();
    } else {
      
    }
    this.subscription = this.navService
      .getNavChangeEmitter()
      .subscribe((emmittedValue) => {
        console.log('in search result');

        console.log(emmittedValue);
        if (emmittedValue['loggedIn'] == true) {
          console.log('in emmitted true');
          this.loggedIn = true;
          this.loggedInDate = new Date();
          this.startTimer();
        } else if (emmittedValue['loggedIn'] == false) {
          console.log('Emmitting after clolsing');
          console.log(emmittedValue['loggedIn']);
          this.logout();
        }
      });
  }
  startTimer() {
    this.interval = setInterval(() => {
      let currentDate = new Date();
      this.time++;
      this.sessionTime = this.secondsToTime(this.time);
      localStorage.setItem('loggedinTime', String(this.time));
    }, 1000);
  }
  secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }
  logout() {
    this.loggedIn = false;
    localStorage.clear();
    this.time = 0;
    clearInterval(this.interval);
    this.sessionTime = {};
    this.router.navigate(['']);
  }
}
