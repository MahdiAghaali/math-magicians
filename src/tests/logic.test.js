import operate from '../logic/operate';
import calculate from '../logic/calculate';

describe('operate(numberOne, numberTwo, operation)', () => {
  it('Adding', () => {
    expect(operate('1', '1', '+')).toBe('2');
    expect(operate('0', '0', '+')).toBe('0');
    expect(operate('7', '8', '+')).toBe('15');
    expect(operate('1', '-1', '+')).toBe('0');
    expect(operate('10', '10', '+')).toBe('20');
  });

  it('subtracting', () => {
    expect(operate('1', '1', '-')).toBe('0');
    expect(operate('0', '0', '-')).toBe('0');
    expect(operate('7', '8', '-')).toBe('-1');
    expect(operate('1', '-1', '-')).toBe('2');
    expect(operate('10', '10', '-')).toBe('0');
  });

  it('dividing', () => {
    expect(operate('1', '1', '÷')).toBe('1');
    expect(operate('0', '1', '÷')).toBe('0');
    expect(operate('4', '8', '÷')).toBe('0.5');
    expect(operate('1', '-1', '÷')).toBe('-1');
    expect(operate('10', '5', '÷')).toBe('2');
  });

  it('multiplying', () => {
    expect(operate('1', '1', 'x')).toBe('1');
    expect(operate('0', '0', 'x')).toBe('0');
    expect(operate('7', '8', 'x')).toBe('56');
    expect(operate('1', '-1', 'x')).toBe('-1');
    expect(operate('10', '10', 'x')).toBe('100');
  });
});

describe('calculate(obj, buttonName)', () => {
  it('should react to numbers', () => {
    expect(calculate({ total: null, next: null, operation: null }, '4')).toEqual({ next: '4', total: null });
    expect(calculate({ total: null, next: '3', operation: null }, '5')).toEqual({ total: null, next: '35' });
    expect(calculate({ total: '4', next: null, operation: '+' }, '4')).toEqual({ total: '4', next: '4', operation: '+' });
  });
  it('should react to operatios', () => {
    expect(calculate({ total: null, next: '34', operation: null }, '+')).toEqual({ total: '34', next: null, operation: '+' });
    expect(calculate({ total: null, next: '34', operation: null }, '-')).toEqual({ total: '34', next: null, operation: '-' });
    expect(calculate({ total: null, next: '34', operation: null }, 'x')).toEqual({ total: '34', next: null, operation: 'x' });
    expect(calculate({ total: null, next: '34', operation: null }, '%')).toEqual({ total: '34', next: null, operation: '%' });
    expect(calculate({ total: null, next: '34', operation: null }, '÷')).toEqual({ total: '34', next: null, operation: '÷' });
    expect(calculate({ total: '9', next: '3', operation: '+' }, '-')).toEqual({ total: '12', next: null, operation: '-' });
  });
});
