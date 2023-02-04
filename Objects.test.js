import { funcObject } from "./Objects";

// merge testing
test('merge function exists', () => {
    expect(funcObject.merge).toBeDefined();
});

test(`Merge of { 'a': [{ 'b': 2 }, { 'd': 4 }] } and { 'a': [{ 'c': 3 }, { 'e': 5 }] } should be equal { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }`, () => {
    const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
    const other = { 'a': [{ 'c': 3 }, { 'e': 5 }] };    
    expect(funcObject.merge(object,other)).toEqual({ 'a': [{'b': 2}, {'d': 4 }, {'c': 3}, {'e': 5}] });
});

test(`Merge of 2 different array suppose to override existing properties and add new ones`, () => {
    const object = { 
        'fruit': 'pineapple', 
        'vegetable': 'tomato',
        'protein': 'chicken',
        'cost': 35
    };
    const other = { 
        'fruit': 'apple',
        'protein': 'chicken',
        'cost': 60,
        'recipe': 'mix everything 🤪'
    };    
    expect(funcObject.merge(object,other)).toEqual({
        'fruit': 'apple',         
        'vegetable': 'tomato',
        'protein': 'chicken',
        'cost': 60,
        'recipe': 'mix everything 🤪'
    });
});

// const object created to check functions: omit, pick, omitBy and pickBy
const object = { 'a': 1, 'b': '2', 'c': 3 };

// omit testing
test('omit function exists', () => {
    expect(funcObject.omit).toBeDefined();
});

test(`the result of omitting the { 'a': 1, 'b': '2', 'c': 3 } shoud be {'b': 2}`, () => {  
    expect(funcObject.omit(object, ['a', 'c'])).toEqual({'b': '2'});
});

test(`the result of omitting the { 'a': 1, 'b': '2', 'c': 3 } shoud be {'b': 2}`, () => {  
    expect(funcObject.omit(object, 'c')).toEqual({'a': 1, 'b': '2'});
});

test(`the result of omitting the { 'a': 1, 'b': '2', 'c': 3 } shoud be {'b': 2}`, () => {  
    expect(funcObject.omit(object, 'blah')).toEqual(object);
});

// pick testing
test('pick function exists', () => {
    expect(funcObject.pick).toBeDefined();
});

test(`the result of picking the { 'a': 1, 'b': '2', 'c': 3 } shoud be {'a': 1, 'c': 3}`, () => {  
    expect(funcObject.pick(object, ['a', 'c'])).toEqual({'a': 1, 'c': 3});
});

test(`the result of picking the { 'a': 1, 'b': '2', 'c': 3 } shoud be {'c': 3}`, () => {  
    expect(funcObject.pick(object, 'c')).toEqual({'c': 3});
});

test(`the result of picking the { 'a': 1, 'b': '2', 'c': 3 } shoud be {'b': 2}`, () => {  
    expect(funcObject.pick(object, 'blah')).toEqual({});
});

// function isNumber for testing pickBy and omitBy functions
function isNumber(value) {
    return Number.isInteger(value);
}

// pickBy testing
test('pickBy function exists', () => {
    expect(funcObject.pickBy).toBeDefined();
});

test(`result of picking by function isNumber the { 'a': 1, 'b': '2', 'c': 3 } shoud be {'a': 1, 'c': 3}`, () => {  
    expect(funcObject.pickBy(object, isNumber)).toEqual({'a': 1, 'c': 3});
});

// omitBy testing
test('omitBy function exists', () => {
    expect(funcObject.omitBy).toBeDefined();
});

test(`result of picking by function isNumber the { 'a': 1, 'b': '2', 'c': 3 } shoud be {'b': '2'}`, () => {  
    expect(funcObject.omitBy(object, isNumber)).toEqual({'b': '2'});
});

// toPairs testing
test('toPairs function exists', () => {
    expect(funcObject.toPairs).toBeDefined();
});

function Foo() {
    this.a = 1;
    this.b = 2;
  }
   
  Foo.prototype.c = 3;

test(`the result of new Foo(){this.a = 1;this.b = 2;} object should be an array with [keys: properties] of Foo`, () => {  
    expect(funcObject.toPairs(new Foo)).toEqual([{'a': 1},{'b': 2}]);
});
