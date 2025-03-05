import { getDocumentElementById } from './utils/get-document-element-by-id.ts';
import { validateIsPositiveNumber } from './methods/validate-is-positive-number.ts';
import { validateIsLessNumber } from './methods/validate-is-less-number.ts';
import { validateIsEvenNumber } from './methods/validate-is-even-number.ts';
import { validate } from './validator/validator.ts';

function validator() {
  const input = getDocumentElementById('input') as HTMLInputElement;
  const validationButton = getDocumentElementById('validation-btn');
  const cleanupButton = getDocumentElementById('cleanup-btn');
  const result = getDocumentElementById('result') as HTMLDivElement;
  const rules = [
    validateIsPositiveNumber,
    validateIsLessNumber(100),
    validateIsEvenNumber,
  ];

  validationButton?.addEventListener('click', () => {
    const { value } = input || {};
    result.innerHTML = validate(value, rules);
  });

  cleanupButton?.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
