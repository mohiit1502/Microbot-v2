import { Component, OnInit, Input } from '@angular/core';
import { HelperServiceService } from 'src/app/services/helpers/helper-service.service';

import { Card } from './card/card.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cardsState: Observable<{cards: Card[]}>;
  @Input() cards: Card[];

  constructor(private store: Store<{ioHistory: {cards: Card[]}}>, private helper: HelperServiceService) { }

  ngOnInit() {
    this.cardsState = this.store.select('ioHistory');
    this.cardsState.subscribe(
      (cards) => {
        this.cards = this.helper.concatenateAndSort(cards);
      }
    )
  }
}
