import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-collab-widget',
  templateUrl: './add-collab-widget.component.html',
  styleUrls: ['./add-collab-widget.component.scss']
})
export class AddCollabWidgetComponent implements OnInit {

  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = true;
    console.log('add collab on init fired');
  }

}
