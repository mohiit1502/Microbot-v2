import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecastOpsService } from 'src/app/services/recast/recast-ops.service';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';
import { CardService } from 'src/app/services/cards/card.service.js';
import { Store } from '@ngrx/store';
import { Command, ClearHistory } from 'src/app/store/cards.actions.js';

import { Card } from '../primary-container/cards/card/card.model';

import * as $config from '../../../../configuration/config.js'
import * as $ from 'node_modules/jquery/dist/jquery';

@Component({
  selector: 'app-command-prompt',
  templateUrl: './command-prompt.component.html',
  styleUrls: ['./command-prompt.component.scss']
})
export class CommandPromptComponent implements OnInit {

  recognition: SpeechRecognition;
  contextMenuFirstDisplay: boolean;
  contextMenuDisplayed: boolean;
  @ViewChild('command') command: ElementRef;
  emptyCommandMessage: string = 'Please type a command or use "Speech" button to speak to the bot.';

  constructor(private recastOpsService: RecastOpsService, 
      private domOpsService: DomOpsService,
      private cardsService: CardService,
      private store: Store<{ioHistory: {responses: Card[]}}>) { }

  ngOnInit() {
    this.domOpsService.repeatRequested.subscribe(
      (command) => {
        $('#command').val(command);
        this.executeCommand();
      }
    )
    this.registerSpeechHandlers();
    this.registerMouseAndKeyboardHandlers();
  }

  toggleClass(event: MouseEvent) {
    $(event.target).toggleClass('fas');
  }

  initiateDomOpsOnEnter(event: any) {
    const code = (event.keyCode ? event.keyCode : event.which);
    if (code === 13) {
      // this.domOpsService.hideNonCards();
      this.executeCommand();
    }
  }

  resetCommand() {
    $('#command').val('');
    $('#command').focus();
  }

  startSpeechRecognition() {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(isChrome) {
      this.recognition.start();
    } else {
      // this.domOpsService.sho
    }
  }

  registerSpeechHandlers() {
    let SpeechRecognition: any;
    let instructions: any = $('#command');
    try {
      // SpeechRecognition = window.SpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.webkitSpeechRecognition;
      //SpeechRecognition = '';
      // this.recognition = new SpeechRecognition();
    }
    catch(e) {
      console.error(e);
      $('.no-browser-support').show();
      $('.app').hide();
    }
    this.recognition.onstart = function() { 
      instructions.val('Voice recognition activated. Try speaking into the microphone.');
    }
    
    this.recognition.onspeechend = function() {
      instructions.val('You were quiet for a while so voice recognition turned itself off.');
    }
    
    this.recognition.onerror = function(event) {
      if(event.error == 'no-speech') {
        instructions.val('No speech was detected. Try again.');  
      };
    }

    this.recognition.onresult = function(event: SpeechRecognitionEvent) {
      let noteContent: string = "";
      let current = event.resultIndex;    
      let transcript = event.results[current][0].transcript;
      let mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
      if(!mobileRepeatBug) {
        noteContent += transcript;
        $('#command').val(noteContent);
      }
    }
  }

  registerMouseAndKeyboardHandlers() {
    $('#content nav div.collapse li a.nav-link i.far.fa-star').hover(() => {
      $('#content nav div.collapse li a.nav-link i.far.fa-star').toggleClass('fas');
    });
    $('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').hover(() => {
      $('#content nav div.collapse li a.nav-link i.far.fa-trash-alt').toggleClass('fas');
    });
    $('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').hover(() => {
      $('#content nav div.collapse li a.nav-link i.far.fa-paper-plane').toggleClass('fas');
    });
    $('*').on('click', (event) => {
      if(!this.contextMenuFirstDisplay) {
        $("#inputSelectionContextMenu").removeClass("show").hide();
        this.contextMenuDisplayed = false;
        event.stopPropagation();
      } else {
        this.contextMenuFirstDisplay = false;
        event.stopPropagation();
      }
    });
  }

  executeCommand() {
    this.domOpsService.hideNonCards();
    let commandVal = this.command.nativeElement.value;
    if(!commandVal) {
      this.domOpsService.showEmptyCommandMessage(this.emptyCommandMessage);
    } else {
      let card = this.cardsService.getCommandCard($config.intentSlugToOperations.command.cardTitle, commandVal, {}, "command");
      let commandAction = new Command(card);
      this.store.dispatch(commandAction);
      const text = { text: commandVal };
      let recastResponse = this.recastOpsService.getRecastResponse(commandVal, text);
      this.processRecastResponse(recastResponse);
    }
  }

  processRecastResponse(recastResponse: any) {
    let bodyRelevant: any;
    let intent: any = "";
    let assuredIntentFactor = 0.6;
    recastResponse.then((body) => {
      bodyRelevant = body.results;
      let intents = bodyRelevant ? bodyRelevant.intents : "";
      if(intents) {
        if(intents.length == 1) {
          intent = intents[0];
        } else if(intents.length > 1) {
          let reducer = (probableIntent, currIntent) => probableIntent.confidence >= currIntent.confidence ? probableIntent : currIntent;
          intent = intents.reduce(reducer, intents[0]);
        } else {
          this.domOpsService.showEmptyCommandMessage("Intent is either not Identified or is not supported, please try again with a different text.");
          return;
        }
        if (intent && intent.confidence > assuredIntentFactor) {
          let intentSlug = intent.slug;
          if (!Object.keys($config.intentSlugToOperations).includes(intentSlug)) {
            this.domOpsService.showEmptyCommandMessage("Intent is either not Identified or is not supported, please try again with a different text.");
            return;
          }
          // $(`#${$config.constants.hiddenIntentFieldId}`).val(intent);
          window.localStorage.setItem($config.constants.hiddenIntentFieldId, intentSlug);
          this.domOpsService.displayIntentBox(intentSlug);
          if (intentSlug == "resethistory") {
            let card = this.cardsService.getResponseCard($config.intentSlugToOperations.resethistory.cardTitle, 
              $config.intentSlugToOperations.resethistory.cardMsg, {}, "response");
            card.insertionCounter = 0;
            let resetHistoryResponseAction = new ClearHistory(card);
            this.store.dispatch(resetHistoryResponseAction);
            return;
          }
          this.domOpsService.widgetIdentified.emit({widget: intentSlug, bodyRelevant: bodyRelevant});
          this.domOpsService.populateRecastData(intentSlug, bodyRelevant);
          // store.dispatch($config.intentSlugToOperations.addquery.action);
        } else  {
          this.domOpsService.showEmptyCommandMessage("Couldn't conform with the required confidence level of the intent match, please try again.");
        }
      } else {
        this.domOpsService.showEmptyCommandMessage("There seems to be an error in the Recast Response, as intents are not returned.");
        return;
      }
    });
    
  }

  showContextMenu(event: any) {
    if(this.contextMenuDisplayed == true) {
      return;
    }
    var inputField = event.target;
    if(inputField.value.length > 2 && inputField.selectionStart == 0 && inputField.selectionEnd == inputField.value.length) {
      var top = event.pageY - 10;
      var left = event.pageX - 90;
      $("#inputSelectionContextMenu").css({
        display: "block",
        top: top,
        left: left
      }).addClass("show");
      this.contextMenuFirstDisplay = true;
      this.contextMenuDisplayed = true;
    }
  }

}
