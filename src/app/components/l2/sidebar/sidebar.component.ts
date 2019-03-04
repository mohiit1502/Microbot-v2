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
    $('#sidebar.active > span').on('click', () => {
      $('#sidebar').css('transform', 'translateX(85px)');
      $('#sidebar').css('box-shadow', 'rgb(224, 151, 32) 10px 10px 30px');
      $('.triangle').removeClass('animation');
    });
    $('*').on('click', (e) => {
//       console.log(e.target);
      e.stopPropagation();
      if(e.target.id !== 'pullOutButton' && e.target.id !== 'sidebar') {
        $('#sidebar').css('transform', 'translateX(0px)');
        $('#sidebar').css('box-shadow', '');
        $('.triangle').addClass('animation');
      }
    })
  }

}
