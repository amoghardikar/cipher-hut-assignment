import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.css'],
})
export class GlobalLoaderComponent implements OnInit {
  loading: boolean;

  constructor(
    private loaderService: LoaderService,
    private spinner: NgxSpinnerService
  ) {
    this.loaderService.isLoading.subscribe((result) => {
      console.log(result);
      /** spinner starts on init */
      if (result) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
      this.loading = result;
    });
  }

  ngOnInit(): void {}
}
