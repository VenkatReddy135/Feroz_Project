import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {

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
