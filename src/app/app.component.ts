import { HostListener, Component, OnInit } from '@angular/core';
import { NavService } from './Services/nav-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cipher-hut-assignment';
    emitValue = { }
  constructor(
    private navService: NavService
  ) {}

  ngOnInit() {

  }
}
