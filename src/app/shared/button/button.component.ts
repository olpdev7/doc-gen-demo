import { Component } from '@angular/core';

/**
 * Represents a button component.
 *
 * @class
 * @memberof components
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /**
   * Returns the value 123.
   *
   * @return {number} The value 123.
   */
  test123() {
    return 123;
  }
}
