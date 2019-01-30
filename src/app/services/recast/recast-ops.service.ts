import { Injectable } from '@angular/core';
import * as $config from "../../configuration/config";
import * as $ from 'node_modules/jquery/dist/jquery';
import { PersistenceOpsService } from '../io/persistence-ops.service';
import { DomOpsService } from '../dom/dom-ops.service';

@Injectable({
  providedIn: 'root'
})
export class RecastOpsService {
  recastToken: string = $config.recasttoken;
  requestUrl: string = "https://api.recast.ai/v2/request";
  // store: any = PersistenceOpsService.store;
  
  constructor(private domOpsService: DomOpsService) {}

  getAndCallProcessIntent(command: string, text: {}) {
    let self = this;
    const url = `${this.requestUrl}?text=${command}`;
    let bodyRelevant: any;
    let intent = "";
    let requestInit: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Token ${this.recastToken}`,
      },
      data: text,
    }
    fetch(url, requestInit)
      .then((response) => {
        response.json().then((body) => {
          bodyRelevant = body.results;
          intent = bodyRelevant.intents[0] ? bodyRelevant.intents[0].slug : "";
          if (intent !== undefined && intent !== "") {
            if (!Object.keys($config.intentSlugToOperations).includes(intent)) {
              // domOpsService.showEmptyCommandMessage("Intent is either not Identified or is not supported, please try again with a different text.");
              return;
            }
            $(`#${$config.constants.hiddenIntentFieldId}`).val(intent);
            // domOpsService.displayIntentBox(intent);
            if (intent == "resethistory") {
              // store.dispatch($config.intentSlugToOperations.resethistory.action);
              return;
            }
            // domOpsService.showWidget(intent);
            // domOpsService.populateRecastData(intent, bodyRelevant);
            // store.dispatch($config.intentSlugToOperations.addquery.action);
          }
          return intent;
        });
      })
      .catch((error) => {
        console.error("Fetch Error =\n", error);
      });
  }
}