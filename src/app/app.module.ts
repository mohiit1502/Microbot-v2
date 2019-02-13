import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/l2/sidebar/sidebar.component';
import { TextFieldComponent } from './components/l1/text-field/text-field.component';
import { ButtonComponent } from './components/l1/button/button.component';
import { CommandPromptComponent } from './components/l2/content/command-prompt/command-prompt.component';
import { PrimaryContainerComponent } from './components/l2/content/primary-container/primary-container.component';
import { ContentComponent } from './components/l2/content/content.component';
import { ModalComponent } from './components/l2/content/modal/modal.component';
import { MessageComponent } from './components/l2/content/primary-container/message/message.component';
import { WidgetComponent } from './components/l2/content/primary-container/widget/widget.component';
import { CardComponent } from './components/l2/content/primary-container/cards/card/card.component';
import { IntentBoxComponent } from './components/l2/content/primary-container/intent-box/intent-box.component';
import { CardsComponent } from './components/l2/content/primary-container/cards/cards.component';
import { GithubOpsService } from './services/github/github-ops.service';
import { JsonReaderService } from './services/io/json-reader.service';
import { DomOpsService } from './services/dom/dom-ops.service';
import { RecastOpsService } from './services/recast/recast-ops.service';
import { PersistenceOpsService } from './services/io/persistence-ops.service';

import { updateHistoryReducer } from './store/cards.reducer';
import { AddCollabWidgetComponent } from './components/l2/content/primary-container/widget/add-collab-widget/add-collab-widget.component';
import { AddIssueCommentWidgetComponent } from './components/l2/content/primary-container/widget/add-issue-comment-widget/add-issue-comment-widget.component';
import { CloseIssueWidgetComponent } from './components/l2/content/primary-container/widget/close-issue-widget/close-issue-widget.component';
import { CreateIssueWidgetComponent } from './components/l2/content/primary-container/widget/create-issue-widget/create-issue-widget.component';
import { CreateRepoWidgetComponent } from './components/l2/content/primary-container/widget/create-repo-widget/create-repo-widget.component';
import { DisplayLastCommentWidgetComponent } from './components/l2/content/primary-container/widget/display-last-comment-widget/display-last-comment-widget.component';
import { ViewRepoWidgetComponent } from './components/l2/content/primary-container/widget/view-repo-widget/view-repo-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TextFieldComponent,
    ButtonComponent,
    CommandPromptComponent,
    ContentComponent,
    PrimaryContainerComponent,
    ModalComponent,
    MessageComponent,
    WidgetComponent,
    CardComponent,
    IntentBoxComponent,
    CardsComponent,
    AddCollabWidgetComponent,
    AddIssueCommentWidgetComponent,
    CloseIssueWidgetComponent,
    CreateIssueWidgetComponent,
    CreateRepoWidgetComponent,
    DisplayLastCommentWidgetComponent,
    ViewRepoWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpModule,
    StoreModule.forRoot({ioHistory: updateHistoryReducer})
  ],
  providers: [DomOpsService, JsonReaderService, RecastOpsService, GithubOpsService, PersistenceOpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
