import { Component, OnInit } from '@angular/core';
import { NavService } from '../Services/nav-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  subscription: any;
  time = 0;
  sessionTime:any = {};
  loggedInDate;
  interval;
  loggedIn = false;
  constructor(private navService: NavService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.navService
      .getNavChangeEmitter()
      .subscribe((emmittedValue) => {
        console.log('in search result');
        this.loggedIn = true;
        console.log(emmittedValue);
        this.loggedInDate = new Date();
        this.startTimer();
      });
  }
  startTimer() {
    this.interval = setInterval(() => {
      let currentDate = new Date();
      this.time++;
    this.sessionTime =   this.secondsToTime(this.time)
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
  logout(){
    this.loggedIn = false;
    clearInterval(this.interval);
    this.router.navigate([''])
  }
}
