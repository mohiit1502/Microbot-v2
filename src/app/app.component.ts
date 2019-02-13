import { Component, Output } from '@angular/core';
import { PersistenceOpsService } from './services/io/persistence-ops.service';
import { Store } from '@ngrx/store';
import { Card } from './components/l2/content/primary-container/cards/card/card.model';

import * as $ from 'node_modules/jquery/dist/jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private persistenceOpsService: PersistenceOpsService, private store: Store<{ioHistory: {responses: Card[]}}>) {}

  ngOnInit() {
    this.registerEvents();
  }

  registerEvents() {
    $(document).ready(() => {
      $('#btnFavorites').click(() => {
    
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
      // const localHistory = JSON.parse(window.localStorage.getItem('currentState'));
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
