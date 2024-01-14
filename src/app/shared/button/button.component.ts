import { Component, Input } from '@angular/core';

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
   * Represents the input for abc operation.
   *
   * @typedef {Object} abcInput
   * @property {string} [abcInput] - The optional input value for abc operation.
   */
  @Input() abcInput?: string;

  private x123 = 123;

  /**
   * Returns the value 123.
   *
   * @return {number} The value 123.
   */
  test123() {
    return 123;
  }
}
