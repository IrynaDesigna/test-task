import {objectArr} from './Arrays';

// chunk testing
test('chunk function exists', () => {
    expect(objectArr.chunk).toBeDefined();
});

test('Chunk the array of 10 values with length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = objectArr.chunk(numbers, len);
    
    expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});


// compact testing
test('compact function exists', () => {
    expect(objectArr.compact).toBeDefined();
});

test('Compact an array of [0, 1, false, 2, "", 3] to [1, 2, 3]', () => {
    expect(objectArr.compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

// drop testing
test('drop function exists', () => {
    expect(objectArr.drop).toBeDefined();
});

test('drop result of ([1,2,3,4,5,6,7,8,9,10],5) sholud be [6,7,8,9,10]', () => {
    expect(objectArr.drop([1,2,3,4,5,6,7,8,9,10],5)).toEqual([6,7,8,9,10]);
});

test('drop result of ([1,2,3,4,5,6,7,8,9,10],15) sholud be []', () => {
    expect(objectArr.drop([1,2,3,4,5,6,7,8,9,10],5)).toEqual([]);
});

test('drop result of ([1,2,3,4,5,6,7,8,9,10],0) sholud be []', () => {
    expect(objectArr.drop([1,2,3,4,5,6,7,8,9,10],5)).toEqual([]);
});

test('drop result of ([1,2,3,4,5,6,7,8,9,10]) sholud be []', () => {
    expect(objectArr.drop([1,2,3,4,5,6,7,8,9,10],5)).toEqual([2,3,4,5,6,7,8,9,10]);
});