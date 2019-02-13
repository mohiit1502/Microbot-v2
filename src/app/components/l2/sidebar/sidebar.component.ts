import { Component, OnInit } from '@angular/core';
import * as $ from 'node_modules/jquery/dist/jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#sidebarCollapse').on('click', () => {
      $('#sidebar').toggleClass('active');
      $('.hideable').toggleClass('hide');
    });
  }

}
