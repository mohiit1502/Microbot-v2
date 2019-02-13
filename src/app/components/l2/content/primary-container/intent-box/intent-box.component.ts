import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';

@Component({
  selector: 'app-intent-box',
  templateUrl: './intent-box.component.html',
  styleUrls: ['./intent-box.component.scss']
})
export class IntentBoxComponent implements OnInit {

  @Input() isHidden: boolean = true;
  @ViewChild('intentBox') intentBox: ElementRef;

  constructor(private domOpsService: DomOpsService) { }

  ngOnInit() {
    this.domOpsService.commandPromptEnteredWithValue.subscribe(
      () => {
        this.isHidden = true;
      }
    );
    this.domOpsService.intentIdentified.subscribe(
      () => {
        this.isHidden = false;
      }
    );
  }

  hideParent(event: any) {
    this.intentBox.nativeElement.classList.add('hide');
    this.isHidden = true;
  }

}
