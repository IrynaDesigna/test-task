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
