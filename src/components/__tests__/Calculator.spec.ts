import { describe, it, expect } from 'vitest';
import { Calculator } from '@/utils/calculator';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
  });

  it('should subtract two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  it('should multiply two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('should divide two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 3)).toBe(2);
  });
});
