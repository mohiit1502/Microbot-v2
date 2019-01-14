import { Component } from '@angular/core';
import * as $ from 'node_modules/jquery/dist/jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    $(document).ready(() => {
      $('#sidebarCollapse').on('click', () => {
        $('#sidebar').toggleClass('active');
        $('.hideable').toggleClass('hide');
      });
      $('#content nav div.collapse li a.nav-link i.far.fa-star').hover(() => {
        $('#content nav div.collapse li a.nav-link i.far.fa-star').toggleClass('fas');
      });
      $('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').hover(() => {
        $('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').toggleClass('fas');
      });
      $('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').hover(() => {
        $('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').toggleClass('fas');
      });
      // $('#command').keyup((e) => {
      //   const code = (e.keyCode ? e.keyCode : e.which);
      //   if (code === 13) {
      //     $('#widgets').children().addClass('hide');
      //     $('#successAlert').addClass('hide');
      //     $('#dangetAlert').addClass('hide');
      //     $('#intentBox').addClass('hide');
      //     const command = document.getElementById('command').value;
      //     if (command) {
      //       const text = { text: command };
      //       recastclient.getAndCallProcessIntent(command, text);
      //     } else {
      //       dom.showEmptyCommandMessage('Please type some relevant words in the command box.');
      //     }
      //   }
      // });
      $('#btnFavorites').click(() => {
    
      });
      $('#btnClearCommand').click(() => {
        $('#command').val('');
        $('#command').focus();
      });
      function hitEnter(command) {
        const commandInputField = $('#command');
        if (command) commandInputField.val(command);
        const e = $.Event('keyup');
        e.which = 13;
        commandInputField.focus();
        commandInputField.trigger(e);
      }
      $('#btnFireCommand').click(() => {
        hitEnter("");
      });
      $('#hideInfoAlert').on('click', () => {
        $('#intentBox').addClass('hide');
      });
      $('#hideSuccessAlert').on('click', () => {
        $('#successAlert').addClass('hide');
      });
      $('#conversations').on('click', '.close', function () {
        const $target = $(this).closest('.card');
        const line = $target.next();
        $target.hide('slow', () => { $target.remove(); });
        line.hide('slow', () => { line.remove(); });
      });
      $('#conversations').on('click', '.btn.btn-info.float-right', function () {
        const parentText = $(this).closest('.card-text').text();
        const command = parentText.substring(0, parentText.indexOf('Repeat'));
        hitEnter(command);
      });
      $('#hideDangerAlert').on('click', () => {
        $('#dangerAlert').addClass('hide');
      });
      // $('#git_bridge').on('click', () => {
      //   window.location.href = 'https://github.com/login/oauth/authorize?scope=user:email:repo&client_id=f6f649a1fe2dfea082ba';
      // });
      const localHistory = JSON.parse(window.localStorage.getItem('currentState'));
      // window.onload = initOps();
    
      function initOps() {
        $('#command').focus();
        // dom.loadConversations(helper.concatenateAndSort(localHistory));
      }
      if (window.location.href.match(/\?code=(.*)/)) {
        const code = window.location.href.match(/\?code=(.*)/)[1];
        // app.getToken(code);
      }
    });
  }
}
