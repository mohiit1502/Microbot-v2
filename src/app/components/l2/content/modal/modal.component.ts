import { Component, OnInit, Input } from '@angular/core';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';
import { Store } from '@ngrx/store';

import { Card } from '../primary-container/cards/card/Card.model';

import * as $ from 'node_modules/jquery/dist/jquery';
import * as $config from '../../../../configuration/config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  @Input() isHidden: boolean = true;

  constructor(private domOpsService: DomOpsService, private store: Store<{ioHistory: {responses: Card[]}}>) { }

  ngOnInit() {
    this.domOpsService.commandPromptEnteredEmpty.subscribe(
      () => {
        this.isHidden = false;
      }
    )
  }

  submitGitData() {
    const data: any = this.domOpsService.getDataFromFormAsJSON();
    // const intent = $(`#${$config.constants.hiddenIntentFieldId}`).val();
    const intent = window.localStorage.getItem($config.constants.hiddenIntentFieldId);
    if (intent) {
      data.intent = intent;
      var action = $config.intentSlugToOperations[intent].action;
      action.payload = data;
      this.store.dispatch(action);
      const operation = $config.intentSlugToOperations[intent].githubOperation;
      // app[operation](data);
    }
  }
}
