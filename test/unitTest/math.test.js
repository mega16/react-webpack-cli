import { add, mul } from '../../src/utils/math';

test('test add 2 + 1 should equal 3', () => {
    expect(add(2, 1)).toBe(3);
});

test('test mul 2 * 3 should be equal 6', () => {
    expect(mul(2, 3)).toBe(6);
});

describe('test', () => {
    test('test add 2 + 2 should equal 3', () => {
        expect(add(2, 2)).toBe(4);
    });

    test('test mul 3 * 3 should be equal 6', () => {
        expect(mul(3, 3)).toBe(9);
    });
});