import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-repo-widget',
  templateUrl: './create-repo-widget.component.html',
  styleUrls: ['./create-repo-widget.component.scss']
})
export class CreateRepoWidgetComponent implements OnInit {

  @Input() isHidden: boolean;
  
  constructor() { }

  ngOnInit() {
    this.isHidden = true;
  }

}
