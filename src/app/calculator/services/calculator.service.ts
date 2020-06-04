/**
 * Service responsible to execute the calculator operations
 *
 * @author Williams Araujo <crfwilliams@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SUM: string = '+';
  static readonly SUB: string = '-';
  static readonly DIV: string = '/';
  static readonly MULT: string = '*';

  constructor() { }

  /**
   * Method to performs a math calculus between two numbers
   * @param num1 number
   * @param num2 number
   * @param operation operation string to be performed
   * @return number operation result
   */
  calculate(num1: number, num2: number, operation: string): number {
    let result: number;

    switch (operation) {
      case CalculatorService.SUM:
        result = num1 + num2;
        break;
      case CalculatorService.SUB:
        result = num1 - num2;
        break;
      case CalculatorService.MULT:
        result = num1 * num2;
        break;
      case CalculatorService.DIV:
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    return result;
  }
}
