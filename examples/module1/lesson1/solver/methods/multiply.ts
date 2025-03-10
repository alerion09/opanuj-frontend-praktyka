import type { CalculatorMethodResult } from '../types/calculator-method-result.ts';

export const multiply = (multiplicand: number, multiplier: number): CalculatorMethodResult => {
  return { result: multiplicand * multiplier };
}