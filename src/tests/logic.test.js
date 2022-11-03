import operate from '../logic/operate';

describe('operate(numberOne, numberTwo, operation)', () => {
  it('test', () => {
    expect(operate('1', '1', '+')).toBe('2');
    expect(operate('1', '13', '+')).toBe('14');
  });
  
  it ('test', () => {
    const test = operate ('10', '5', 'x');
    expect(test).toBe ('50');
  });
});
