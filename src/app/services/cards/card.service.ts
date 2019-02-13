import { Injectable } from '@angular/core';
import { DomOpsService } from '../dom/dom-ops.service';
import { HelperServiceService } from '../helpers/helper-service.service';

import { Card } from 'src/app/components/l2/content/primary-container/cards/card/card.model';

import * as $ from 'node_modules/jquery/dist/jquery';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = [];

  constructor(private domOpsService: DomOpsService, private helperService: HelperServiceService) { }

  renderCards() {
    let localHistory = JSON.parse('{"createrepo":[],"createissue":[],"closeissue":[],"addissuecomment":[],"displaylastcomment":[],"addcollab":[],"viewrepos":[],"queries":[{"command":"create repo","type":"command","insertionCounter":1},{"command":"create repo","type":"command","insertionCounter":2}],"messages":[],"insertionCounter":2}')
    $("#conversations").empty();
    // const historyAll = this.helper.concatenateAndSort(this.store.select('ioHistory'));
    const historyAll = this.helperService.concatenateAndSort(localHistory);
    this.domOpsService.loadConversations(historyAll);
  }

  getCommandCard(cardTitle, cardContent, data, type) {
    return new Card(cardTitle, cardContent, data, type, Date.now()/1000, 'command-card');
  }

  getResponseCard(cardTitle, cardContent, data, type) {
    return new Card(cardTitle, cardContent, data, type, Date.now()/1000, 'response-card');
  }

  getDisplayTime(timestamp: number) {
    let start = timestamp;
    let current = Date.now()/1000;
    let difference = current - start;
    const days = Math.floor(difference / 86400);
    const hours = Math.floor((difference - (days * 86400)) / 3600);
    const minutes = Math.floor((difference - (days * 86400) - (hours * 3600)) / 60);
    const secs = Math.floor((difference - (days * 86400) - (hours * 3600) - (minutes * 60)));
    let displayTime = "";
    if (days != 0) {
      displayTime = `${displayTime + days} days ago`;
      if(days == 1) {
        return 'Yesterday';
      } else {
        return displayTime;
      }
    }
    if (hours != 0) {
      displayTime = `${displayTime + hours} hours ago`;
      if(hours == 1) {
        return 'an hour ago';
      } else {
        return displayTime;
      }
    }
    if (minutes != 0) {
      displayTime = `${displayTime + minutes} minutes ago`;
      if(minutes == 1) {
        return 'a minute ago';
      } else {
        return displayTime;
      }
    }
    displayTime = `${displayTime + secs} seconds ago`;
    return displayTime;
  }

}
