import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Input() textFieldId: String;
  @Input() placeHolderText: String;
  @Input() disabled: boolean;
  @Input() maxLength: String;
  @Input() pattern: String;
  @Input() readOnly: boolean;
  @Input() type: String;
  @Input() value: String;
  @Input() classes: String;

  constructor() { }

  ngOnInit() {
  }

}
