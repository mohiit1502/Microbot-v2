import { Component, OnInit } from '@angular/core';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';
import { HelperServiceService } from 'src/app/services/helpers/helper-service.service';

import * as $ from 'node_modules/jquery/dist/jquery'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private dom: DomOpsService, private helper: HelperServiceService) { }

  ngOnInit() {
    const localHistory = JSON.parse(window.localStorage.getItem('currentState'));
    $('#command').focus();
    // $("#conversations").empty();
    // const historyAll = this.helper.concatenateAndSort(store.getState());
    // this.dom.loadConversations(this.helper.concatenateAndSort(localHistory));
  }

}
