import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  @Input() message: string;
  @Output() cookie = new EventEmitter<string>();

  private _color: string;

  get color() {
    return this._color;
  }

  get colors() {
    return this._colorService.colors;
  }

  constructor(private _colorService: ColorService) {}

  ngOnInit() {
    this._color = this._colorService.generateRandomColor();
  }

  onButtonClick() {
    this.cookie.emit('chocolate chip');
  }
}
