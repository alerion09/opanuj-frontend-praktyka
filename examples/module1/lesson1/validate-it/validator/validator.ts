import type { NumericValidationMethod } from '../types/numeric-validation-method.ts';
import { validateIsInteger } from '../methods/validate-is-integer.ts';
import {
  ERROR_MESSAGE_INVALID_NUMBER,
  ERROR_MESSAGE_INVALID_VALUE,
  SUCCESS_MESSAGE_VALID_NUMBER,
} from '../messages/messages.ts';

export const validate = (value: string, rules?: NumericValidationMethod[]) => {
  if (!validateIsInteger(value)) {
    return ERROR_MESSAGE_INVALID_VALUE;
  }

  if (!rules?.length) {
    return SUCCESS_MESSAGE_VALID_NUMBER;
  }

  const validRules = rules.every((rule) => rule(Number(value)));
  if (!validRules) {
    return ERROR_MESSAGE_INVALID_NUMBER;
  }

  return SUCCESS_MESSAGE_VALID_NUMBER;
};
