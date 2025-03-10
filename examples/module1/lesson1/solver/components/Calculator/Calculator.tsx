import { useState } from 'react';
import { NumberInput } from '../NumberInput/NumberInput.tsx';
import { Button } from '../Button/Button.tsx';
import { add } from '../../methods/add.ts';
import { subtract } from '../../methods/subtract.ts';
import { multiply } from '../../methods/multiply.ts';
import { divide } from '../../methods/divide.ts';
import type { CalculatorMethodResult } from '../../types/calculator-method-result.ts';

export const Calculator = () => {
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const calculate = (method: (number1: number, number2: number) => CalculatorMethodResult) => {
    const { error, result } = method(input1 || 0, input2 || 0);
    const defaultError = 'Something went wrong. Please try again.';

    if (result || result === 0) {
    setResult(result);
    setError('')
    } else {
      setResult(0);
      setError(error || defaultError);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInput value={input1} onChange={setInput1} />
        <NumberInput value={input2} onChange={setInput2} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculate(add)}>+</Button>
        <Button onClick={() => calculate(subtract)}>-</Button>
        <Button onClick={() => calculate(multiply)}>*</Button>
        <Button onClick={() => calculate(divide)}>/</Button>
        {error ? <div>Error: {error}</div> : <div>Result: {result}</div>}
    </div>
</div>
  )
};
