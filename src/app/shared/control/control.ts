import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  /*
  In Angular, ViewEncapsulation is the mechanism that determines how the styles defined in your component’s .css file interact with the rest of the application. By default, Angular tries to protect your styles, but setting it to None breaks those walls down.
  */
  // FIX: doing this the styles of control element will become global styles
  encapsulation: ViewEncapsulation.None,

  host: {
    // take any key value, it will add property on host element
    // it will add the key-value pair as property on host element
    // it will add class control in app-control where-ever it is used
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control {
  // alternative way
  // @HostBinding('class') className = 'control'
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('clicked');
    console.log(this.el);
  }
}
