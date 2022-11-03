import operate from '../logic/operate';

describe('operate(numberOne, numberTwo, operation)', () => {
  it('test', () => {
    const test = operate('1', '1', '+');
    expect(test).toBe('2');
  });
});
