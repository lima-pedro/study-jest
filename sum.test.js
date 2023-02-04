const sum = require('./sum');

test('adds 1 + 2 to equals 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('the sum between 2 and 2 is 4', () => {
    expect(2+2).toBe(4);
})

test('assing object data', () => {
    const data = { one: 1 }
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 })
})

test('added positive number, different of 0', () => {
    for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})

test('testando variavel nula', () => {
    const data = null;
    const data2 = undefined;
    const data3 = 'also';
    expect(data).toBeNull();
    expect(data2).toBeUndefined();
    expect(data3).toBeDefined();
})