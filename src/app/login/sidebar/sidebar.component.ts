import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit , AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
  //   $(document).ready(function () {
  //     // $("#sidebar").mCustomScrollbar({
  //     //     theme: "minimal"
  //     // });

  //     $('#dismiss, .overlay').on('click', function () {
  //         // hide sidebar
  //         $('#sidebar').removeClass('active');
  //         // hide overlay
  //         $('.overlay').removeClass('active');
  //     });

  //     $('#sidebarCollapse').on('click', function () {
  //         // open sidebar
  //         $('#sidebar').addClass('active');
  //         // fade in the overlay
  //         $('.overlay').addClass('active');
  //         $('.collapse.in').toggleClass('in');
  //         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  //     });
  // });
  }
  ngOnInit(): void {
  }

}
