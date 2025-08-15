import { describe, it, expect } from 'vitest';

import { getResultTextByResult } from './output';

describe('getResultTextByResult()', () => {
  it('should return a string, no matter which value is passed in', () => {
    const val1 = 1;
    const val2 = 'invalid';
    const val3 = false;

    const result1 = getResultTextByResult(val1);
    const result2 = getResultTextByResult(val2);
    const result3 = getResultTextByResult(val3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;

    const resultText = getResultTextByResult(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = getResultTextByResult(result);

    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = getResultTextByResult(result);

    expect(resultText).toContain('Invalid');
  });
});