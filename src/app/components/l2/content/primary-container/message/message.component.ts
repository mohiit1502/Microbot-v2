import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() isHidden: boolean = true;

  constructor(private domOpsService: DomOpsService) { }

  ngOnInit() {
    this.domOpsService.commandPromptEnteredWithValue.subscribe(
      () => {
        this.isHidden = true;
      }
    )
  }

  hideMessage(template: HTMLInputElement) {
    template.hidden = true;
  }
}
