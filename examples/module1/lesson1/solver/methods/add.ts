import type { CalculatorMethodResult } from '../types/calculator-method-result.ts';

export const add = (addend1: number, addend2: number): CalculatorMethodResult => {
  return { result: addend1 + addend2 };
}