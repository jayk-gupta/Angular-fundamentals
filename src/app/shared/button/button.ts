import { Component } from '@angular/core';

@Component({
  // any button in component which has appButton attribute on it should be controlled by this component
  selector: 'button[appButton], a[appButton]]',
  // selector: 'button.button (button that has a class button on it)',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

}
/*
Every Angular component has a Host Element
A component with a selector of app-header targets an <app-header> element which is rendered into the real DOM.
*/
/*
The component host element is NOT considered a part of the component template but will be affected by the (scoped) component styles via:host
Meaning:
Apply style to the element this component is attached to.
*/ 