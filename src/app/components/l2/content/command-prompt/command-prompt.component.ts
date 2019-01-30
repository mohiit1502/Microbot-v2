import { Component, OnInit } from '@angular/core';
import { RecastOpsService } from 'src/app/services/recast/recast-ops.service';

import * as $ from 'node_modules/jquery/dist/jquery';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';

@Component({
  selector: 'app-command-prompt',
  templateUrl: './command-prompt.component.html',
  styleUrls: ['./command-prompt.component.scss']
})
export class CommandPromptComponent implements OnInit {

  constructor(private recastOpsService: RecastOpsService, private domOpsService: DomOpsService) { }

  ngOnInit() { }

  toggleClass(event: MouseEvent) {
    $(event.target).toggleClass('fas');
  }

  initiateDomOpsOnEnter(event: any) {
    const code = (event.keyCode ? event.keyCode : event.which);
    if (code === 13) {
      $('#widgets').children().addClass('hide');
      $('#successAlert').addClass('hide');
      $('#dangerAlert').addClass('hide');
      $('#intentBox').addClass('hide');
      const command = event.target.value;
      if (command) {
        const text = { text: command };
        this.recastOpsService.getAndCallProcessIntent(command, text);
      } else {
        // this.domOpsService.showEmptyCommandMessage('Please type some relevant words in the command box.');
      }
    }
  }

}
