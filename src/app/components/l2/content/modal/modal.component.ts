import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';
import { GithubOpsService } from 'src/app/services/github/github-ops.service';

import * as $config from '../../../../configuration/config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  @Input() isHidden: boolean = true;

  constructor(
    private domOpsService: DomOpsService, 
    private githubService: GithubOpsService) { }

  ngOnInit() {
    this.domOpsService.commandPromptEnteredEmpty.subscribe(
      () => {
        this.isHidden = false;
      }
    )
  }

  submitGitData() {   
    const intent = window.localStorage.getItem($config.constants.hiddenIntentFieldId);
    if (intent) {
      this.githubService.gitOperationIdentified.emit($config.intentSlugToOperations[intent].githubOperation);
    }
  }
}
