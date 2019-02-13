import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-last-comment-widget',
  templateUrl: './display-last-comment-widget.component.html',
  styleUrls: ['./display-last-comment-widget.component.scss']
})
export class DisplayLastCommentWidgetComponent implements OnInit {

  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = true;
  }

}
