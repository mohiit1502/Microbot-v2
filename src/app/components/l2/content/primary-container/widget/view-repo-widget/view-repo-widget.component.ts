import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-repo-widget',
  templateUrl: './view-repo-widget.component.html',
  styleUrls: ['./view-repo-widget.component.scss']
})
export class ViewRepoWidgetComponent implements OnInit {

  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = true;
  }

}
