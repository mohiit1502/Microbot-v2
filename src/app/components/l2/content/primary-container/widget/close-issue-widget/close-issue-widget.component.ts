import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-close-issue-widget',
  templateUrl: './close-issue-widget.component.html',
  styleUrls: ['./close-issue-widget.component.scss']
})
export class CloseIssueWidgetComponent implements OnInit {

  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = true;
  }

}
