import { Component, OnInit, Input } from '@angular/core';
import { DomOpsService } from 'src/app/services/dom/dom-ops.service';
import { CardService } from 'src/app/services/cards/card.service';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() displayTime: string;

  constructor(private cardService: CardService,
      private domOpsService: DomOpsService) { }

  // ngOnInit() {
  //   setInterval(() => {
  //     this.displayTime = this.cardService.getDisplayTime(this.card.timestamp)
  //   }, 1000)
  // }

  // updateDisplayTime() {
  //   this.displayTime = this.cardService.getDisplayTime(this.card.timestamp);
  // }

  ngOnInit() {
      this.updateDisplayTime();
  }

  updateDisplayTime() {
    // console.log("tracking run " + this.card.insertionCounter + " " + this.displayTime);
    this.displayTime = this.cardService.getDisplayTime(this.card.timestamp);
    let updateInterval = 1000;
    if(this.displayTime.includes('minutes')) {
      updateInterval = updateInterval * 60;
    } else if(this.displayTime.includes('hours')) {
      updateInterval = updateInterval * 60 * 60;
    } else if(this.displayTime.includes('days')) {
      updateInterval = updateInterval * 60 * 60 * 24;
    }
    setTimeout(() => {
      this.updateDisplayTime()
    }, updateInterval)
  }

  repeatCommand() {
    this.domOpsService.repeatCommand(this.card);
  }

}
