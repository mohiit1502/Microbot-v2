import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/l2/sidebar/sidebar.component';
import { TextFieldComponent } from './components/l1/text-field/text-field.component';
import { ButtonComponent } from './components/l1/button/button.component';
import { CommandPromptComponent } from './components/l2/content/command-prompt/command-prompt.component';
import { ContentComponent } from './components/l2/content/content.component';
import { DomOpsService } from './services/dom/dom-ops.service';
import { JsonReaderService } from './services/io/json-reader.service';
import { PrimaryContainerComponent } from './components/l2/content/primary-container/primary-container.component';
import { ModalComponent } from './components/l2/content/modal/modal.component';
import { MessageComponent } from './components/l2/content/primary-container/message/message.component';
import { WidgetComponent } from './components/l2/content/primary-container/widget/widget.component';
import { CardComponent } from './components/l2/content/primary-container/card/card.component';
import { RecastOpsService } from './services/recast/recast-ops.service';
import { GithubOpsService } from './services/github/github-ops.service';
import { PersistenceOpsService } from './services/io/persistence-ops.service';
import { IntentBoxComponent } from './components/l2/content/primary-container/intent-box/intent-box.component';

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
    IntentBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DomOpsService, JsonReaderService, RecastOpsService, GithubOpsService, PersistenceOpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
