import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {

  constructor() { }
  @HostListener('keydown', ['$event'])
  KeyDown(event: KeyboardEvent) {
    const Keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','Backspace','ArrowLeft','ArrowRight'];
    if (Keys.includes(event.key)) {
      console.log(`allowed,${event.key}`);
      return;
    } else {
      event.preventDefault();
    }
  }
}
