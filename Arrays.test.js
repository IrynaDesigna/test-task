import {objectArr} from './Arrays';

const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

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
    expect(objectArr.drop([1,2,3,4,5,6,7,8,9,10],15)).toEqual([]);
});

test('drop result of ([1,2,3,4,5,6,7,8,9,10],0) sholud be [1,2,3,4,5,6,7,8,9,10]', () => {
    expect(objectArr.drop([1,2,3,4,5,6,7,8,9,10],0)).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('drop result of ([1,2,3,4,5,6,7,8,9,10]) sholud be [2,3,4,5,6,7,8,9,10]', () => {
    expect(objectArr.drop([1,2,3,4,5,6,7,8,9,10])).toEqual([2,3,4,5,6,7,8,9,10]);
});

// take testing
test('take function exists', () => {
    expect(objectArr.take).toBeDefined();
});

test('take result of ([1,2,3,4,5,6,7,8,9,10],5) sholud be [1,2,3,4,5]', () => {
    expect(objectArr.take([1,2,3,4,5,6,7,8,9,10],5)).toEqual([1,2,3,4,5]);
});

test('take result of ([1,2,3,4,5,6,7,8,9,10],15) sholud be [1,2,3,4,5,6,7,8,9,10]', () => {
    expect(objectArr.take([1,2,3,4,5,6,7,8,9,10],15)).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('take result of ([1,2,3,4,5,6,7,8,9,10],0) sholud be []', () => {
    expect(objectArr.take([1,2,3,4,5,6,7,8,9,10],0)).toEqual([]);
});

test('take result of ([1,2,3,4,5,6,7,8,9,10]) sholud be [1]', () => {
    expect(objectArr.take([1,2,3,4,5,6,7,8,9,10])).toEqual([1]);
});

// includes testing
test('includes function exists', () => {
    expect(objectArr.includes).toBeDefined();
});

test('includes result of ([1, 2, 3], 1) sholud be true', () => {
    expect(objectArr.includes([1, 2, 3], 1)).toBe(true);
});

// find testing
test('find function exists', () => {
    expect(objectArr.find).toBeDefined();
});

test('find(users, function(o) { return o.age < 40; }) => object for "barney"', () => {
    expect(objectArr.find(users, function(o) { return o.age < 40; })).toEqual({ 'user': 'barney',  'age': 36, 'active': true });
});

test('find(users, { "age": 1, "active": true }) => object for "pebbles" ', () => {
    expect(objectArr.find(users, { 'age': 1, 'active': true })).toEqual({ 'user': 'pebbles', 'age': 1,  'active': true });
});

test('find(users, ["active", false]) => object for "fred"', () => {
    expect(objectArr.find(users, ['active', false])).toEqual({ 'user': 'fred',    'age': 40, 'active': false });
});

test('find(users, "active") => object for "barney"', () => {
    expect(objectArr.find(users, 'active')).toEqual({ 'user': 'barney',  'age': 36, 'active': true });
});

test("find(['a','b',3,7,4,5,'6','b',8,'h',10],'b',5) => 'b'", () => {
    expect(objectArr.find(['a','b',3,7,4,5,'6','b',8,'h',10],'b',5)).toBe('b');
});

test("find(['a','b',3,7,4,5,'6','b',8,'h',10],'b',5) => undefined", () => {
    expect(objectArr.find(['a','b',3,7,4,5,'6','b',8,'h',10],'a',5)).toBeUndefined(undefined);
});


// filter testing
test('fiter function exists', () => {
    expect(objectArr.filter).toBeDefined();
});

test(`Filter by function(o) { return !o.active; } of Users should be [{ 'user': 'fred',    'age': 40, 'active': false }]`, () => {
    expect(objectArr.filter(users, function(o) { return !o.active; })).toEqual([{ 'user': 'fred',    'age': 40, 'active': false }]);
});

test(`Filter by { 'age': 36, 'active': true } of Users should be [{ 'user': 'barney',  'age': 36, 'active': true }]`, () => {
    expect(objectArr.filter(users, { 'age': 36, 'active': true })).toEqual([{ 'user': 'barney',  'age': 36, 'active': true }]);
});

test(`Filter by ['active', false] of Users should be [{ 'user': 'fred',    'age': 40, 'active': false }]`, () => {
    expect(objectArr.filter(users, ['active', false])).toEqual([{ 'user': 'fred',    'age': 40, 'active': false }]);
});

test(`Filter by 'active' of Users should be [{ 'user': 'barney',  'age': 36, 'active': true },{ 'user': 'pebbles', 'age': 1,  'active': true }]`, () => {
    expect(objectArr.filter(users, 'active')).toEqual([{ 'user': 'barney',  'age': 36, 'active': true },{ 'user': 'pebbles', 'age': 1,  'active': true }]);
});

test(`Filter by function(el) {return el > 4} of [1,2,2,4,5,6,7,8,9] should be [5,6,7,8,9]`, () => {
    expect(objectArr.filter([1,2,2,4,5,6,7,8,9], function(el) {return el > 4})).toEqual([5,6,7,8,9]);
});

test(`Filter by 2 of [1,2,2,4,5,6,7,8,9] should be [2,2]`, () => {
    expect(objectArr.filter([1,2,2,4,5,6,7,8,9], 2)).toEqual([2,2]);
});

// map testing
test('map function exists', () => {
    expect(objectArr.map).toBeDefined();
});

test(`Map by function(n) {return n * n} of [4, 8] should be [16,64]`, () => {
    expect(objectArr.map([4, 8], function(n) {return n * n})).toEqual([16,64]);
});

test(`Map by function(n) {return n * n} of { 'a': 4, 'b': 8 } should be [16,64]`, () => {
    expect(objectArr.map({ 'a': 4, 'b': 8 }, function(n) {return n * n})).toEqual([16,64]);
});

test(`Map by 'user' of Users should be [16,64]`, () => {
    expect(objectArr.map(users, 'user')).toEqual(["barney","fred","pebbles"]);
});
