import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {

  constructor(private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    /** spinner starts on init */
    this.SpinnerService.show();

    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.SpinnerService.hide();
    }, 2000);
  }

}
