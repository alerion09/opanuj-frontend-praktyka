import type { CalculatorMethodResult } from '../types/calculator-method-result.ts';

export const divide = (dividend: number, divisor: number): CalculatorMethodResult => {
  if (!divisor) {
    return { error: 'Cannot divide by zero'}
  }

  return { result: dividend / divisor };
}