import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorfy]',
})
export class ColorfyDirective {
  @HostBinding('style.color')
  @Input()
  color = 'blue';

  @HostListener('click')
  onClick() {
    alert(`You clicked ${this.color} text`);
  }

  constructor() {}
}
