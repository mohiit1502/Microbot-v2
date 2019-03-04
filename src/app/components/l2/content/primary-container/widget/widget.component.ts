import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';
import { GithubOpsService } from 'src/app/services/github/github-ops.service';
import { CardService } from 'src/app/services/cards/card.service';

import { Command } from 'src/app/store/cards.actions';
import { Card } from '../cards/card/card.model';
import { Store } from '@ngrx/store';

import { AddCollabWidgetComponent } from './add-collab-widget/add-collab-widget.component';
import { AddIssueCommentWidgetComponent } from './add-issue-comment-widget/add-issue-comment-widget.component';
import { CreateRepoWidgetComponent } from './create-repo-widget/create-repo-widget.component';
import { CloseIssueWidgetComponent } from './close-issue-widget/close-issue-widget.component';
import { CreateIssueWidgetComponent } from './create-issue-widget/create-issue-widget.component';
import { DisplayLastCommentWidgetComponent } from './display-last-comment-widget/display-last-comment-widget.component';
import { ViewRepoWidgetComponent } from './view-repo-widget/view-repo-widget.component';

import * as $config from '../../../../../configuration/config';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  // @Input() isHidden: boolean = true;
  @ViewChild('widget') widget: ElementRef;
  @ViewChild('underWidgetLine') underWidgetLine: ElementRef;
  @ViewChild(AddCollabWidgetComponent) addCollabWidgetComponent: AddCollabWidgetComponent;
  @ViewChild(AddIssueCommentWidgetComponent) addIssueCommentWidgetComponent: AddIssueCommentWidgetComponent;
  @ViewChild(CloseIssueWidgetComponent) closeIssueWidgetComponent: CloseIssueWidgetComponent;
  @ViewChild(CreateIssueWidgetComponent) createIssueWidgetComponent: CreateIssueWidgetComponent;
  @ViewChild(CreateRepoWidgetComponent) createRepoWidgetComponent: CreateRepoWidgetComponent;
  @ViewChild(DisplayLastCommentWidgetComponent) displayLastCommentWidgetComponent: DisplayLastCommentWidgetComponent;
  @ViewChild(ViewRepoWidgetComponent) viewRepoWidgetComponent: ViewRepoWidgetComponent;

  intentmap: {};

  constructor(
    private domOpsService: DomOpsService,
    private githubService: GithubOpsService,
    private cardsService: CardService,
    private store: Store<{ioHistory: {responses: Card[]}}>) { }

  ngOnInit() {
    this.intentmap = {
      'createrepo': this.createRepoWidgetComponent,
      'createissue': this.createIssueWidgetComponent,
      'closeissue': this.closeIssueWidgetComponent,
      'addissuecomment': this.addIssueCommentWidgetComponent,
      'displaylastcomment': this.displayLastCommentWidgetComponent,
      'addcollab': this.addCollabWidgetComponent,
      'viewrepos': this.viewRepoWidgetComponent,
    }
    this.domOpsService.commandPromptEnteredWithValue.subscribe(
      () => {
        Object.keys(this.intentmap).forEach(key => {
          this.intentmap[key].isHidden = true;
        });
        this.underWidgetLine.nativeElement.classList.add('hide');
      }
    );
    this.domOpsService.widgetIdentified.subscribe(
      (intent) => {
        this.intentmap[intent.widget].isHidden = false;
        this.underWidgetLine.nativeElement.classList.remove('hide');
        // this.domOpsService.populateRecastData(intent.widget.slug, );
      }
    );
    this.githubService.gitOperationIdentified.subscribe(
      (gitOperation) => {
        const data: any = this.domOpsService.getDataFromFormAsJSON();
        const intent = window.localStorage.getItem($config.constants.hiddenIntentFieldId);
        data.intent = intent;
        this.githubService[gitOperation](data);
        let card = this.cardsService.getResponseCard($config.intentSlugToOperations[intent].successMessage, "", data, "response");
        let commandAction = new Command(card);
        this.store.dispatch(commandAction);
      }
    )
  }
}
