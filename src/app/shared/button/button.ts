import { Component } from '@angular/core';

@Component({
  // selector is not limited to being a element selector
  // Angular supports other kinds of selectors as well
  // attribute selector
  // any button that also has appBUtton attribute should be controlled by this component

  selector: 'button[appButton],a[appButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  

}
