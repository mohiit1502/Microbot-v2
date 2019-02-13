import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';

import { AddCollabWidgetComponent } from './add-collab-widget/add-collab-widget.component';
import { AddIssueCommentWidgetComponent } from './add-issue-comment-widget/add-issue-comment-widget.component';
import { CreateRepoWidgetComponent } from './create-repo-widget/create-repo-widget.component';
import { CloseIssueWidgetComponent } from './close-issue-widget/close-issue-widget.component';
import { CreateIssueWidgetComponent } from './create-issue-widget/create-issue-widget.component';
import { DisplayLastCommentWidgetComponent } from './display-last-comment-widget/display-last-comment-widget.component';
import { ViewRepoWidgetComponent } from './view-repo-widget/view-repo-widget.component';

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

  constructor(private domOpsService: DomOpsService) { }

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
    )
  }
}
