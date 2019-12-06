const multiply = require('./multiply');

describe('test multiply scenarios', () => {
    test('multiply 3 * 2 should give 6', () => {
        expect(multiply(3, 2)).toBe(6);
    });
    test('multiple 4 * 3 should not give 11', () => {
        expect(multiply(4, 3)).not.toBe(11);
    })
})

test('object example', () => {
    const data = {first: 1};
    data['second'] = 2;
    expect(data).toEqual({first: 1, second: 2});
});
