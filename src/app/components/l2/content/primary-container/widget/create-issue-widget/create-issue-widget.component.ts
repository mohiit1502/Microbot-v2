import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-issue-widget',
  templateUrl: './create-issue-widget.component.html',
  styleUrls: ['./create-issue-widget.component.scss']
})
export class CreateIssueWidgetComponent implements OnInit {

  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = true;
  }

}
