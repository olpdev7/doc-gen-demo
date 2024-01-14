import { Component } from '@angular/core';

/**
 * Represents a TestInterface which contains an ID and a title.
 * @interface
 */
export interface TestInterface {
  id: string;
  title: string;
}

/**
 * Represents the ArticlesComponent class.
 *
 */
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  /**
   * Logs the message 'XXDS' to the console.
   *
   * @param {string} x - The message to be logged.
   * @param {TestInterface} b - An instance of the TestInterface.
   * @return {void}
   */
  xte(x: string, b: TestInterface) {
    console.log('XXDS', x, b);
  }

  /**
   * Calculates the result of raising the number 1 to the power of 100.
   *
   * @returns {number} The result of raising 1 to the power of 100.
   */
  xom() {
    const y = 1;
    return Math.pow(y, 100);
  }
}
