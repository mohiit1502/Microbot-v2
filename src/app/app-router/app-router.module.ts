import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from '../components/l2/content/primary-container/widget/widget.component';
import { MessageComponent } from '../components/l2/content/primary-container/message/message.component';
import { IntentBoxComponent } from '../components/l2/content/primary-container/intent-box/intent-box.component';
import { CommandPromptComponent } from '../components/l2/content/command-prompt/command-prompt.component';
import { SidebarComponent } from '../components/l2/sidebar/sidebar.component';
import { ContentComponent } from '../components/l2/content/content.component';
import { ModalComponent } from '../components/l2/content/modal/modal.component';
import { PrimaryContainerComponent } from '../components/l2/content/primary-container/primary-container.component';
import { CardsComponent } from '../components/l2/content/primary-container/cards/cards.component';
import { CardComponent } from '../components/l2/content/primary-container/cards/card/card.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { 
    path: 'home', 
    children : [
      { path: '', component: SidebarComponent, outlet: 'sidebar'},
      { 
        path: '', 
        component: ContentComponent, 
        outlet: 'content',
        children: [
          { path: '', component: CommandPromptComponent, outlet: 'command-prompt'},
          { path: '', component: ModalComponent, outlet: 'modal'},
          { 
            path: '', 
            component: PrimaryContainerComponent, 
            outlet: 'primary-container',
            children: [
              { 
                path: '', 
                component: CardsComponent, 
                outlet: 'cards',
                children: [
                  { path: '', component: CardComponent, outlet: 'card'},
                ]
              },
              { path: '', component: IntentBoxComponent, outlet: 'intent'},
              { path: '', component: MessageComponent, outlet: 'message'},
              { path: '', component: WidgetComponent, outlet: 'widget'}
            ]
          }
        ]
      }
    ]
  },
  { path: 'appWidget', component: WidgetComponent },
  { path: 'error', component: MessageComponent },
  { path: 'intent', component: IntentBoxComponent }
  // { path: 'appWidget', component: WidgetComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
