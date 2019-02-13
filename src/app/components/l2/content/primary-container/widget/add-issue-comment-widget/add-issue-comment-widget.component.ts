import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-issue-comment-widget',
  templateUrl: './add-issue-comment-widget.component.html',
  styleUrls: ['./add-issue-comment-widget.component.scss']
})
export class AddIssueCommentWidgetComponent implements OnInit {

  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = true;
  }

}
