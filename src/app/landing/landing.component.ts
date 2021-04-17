import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    function randomNumber(min, max): any {
      const r = Math.random() * (max - min) + min;
      return Math.floor(r);
    }

    // window.setInterval(() => {
    //   const div = document.getElementById('smo');
    //   const xCoord = randomNumber(div.offsetLeft, div.offsetLeft + div.offsetWidth - 100);
    //   const yCoord = randomNumber(0, div.offsetTop);
    //   $('.hi').append('<div class=\'ripple\'></div>');
    //   $('.ripple:last').offset({top: yCoord, left: xCoord});
    //   const maxWidthSmoke = Math.random() * 70 + 30;
    //   const smokeRising = Math.random() * 500 + 400;
    //   const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    //   const smokeDirection = Math.random() * 90 * plusOrMinus;
    //   $('.ripple:last').animate({
    //     opacity: 1,
    //     // width: maxWidthSmoke,
    //     // height: Math.random() * 70 + 30,
    //     width: 100,
    //     height: 100,
    //     top: `-=${smokeRising}`,
    //     left: `-=${smokeDirection}`,
    //     backgroundColor: 'red'
    //   }, 10000, function() {
    //     $(this).remove();
    //   });
    // }, 100);
  }
}
