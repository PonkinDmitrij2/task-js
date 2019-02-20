const {
    getMaxCost,
    getMinCost,
    getById,
    sortedDescending,
    sortedAscending,
    renameById,
    deleteById,
    searchAllParameters,
} = require('../utils');
const products = require('../products');

// test('getMaxCost', () => {
//     const result = getMaxCost(products);
//     expect(result.id).toBe(5);
// });

// test('getMinCost', () => {
//     const result = getMinCost(products);
//     expect(result.id).toBe(2);
// });

test('getById', () => {
    expect(getById(products, 3).id).toBe(3);
    expect(getById(products, -1)).toBeUndefined();
});

test('sortedAscending', () => {
    const result = sortedAscending(products);
    expect(result[0].id).toBe(2);
    expect(result[3].id).toBe(3);
    expect(result[5].id).toBe(5);
});

test('sortedDescending', () => {
    const result = sortedDescending(products);
    expect(result[0].id).toBe(5);
    expect(result[3].id).toBe(4);
    expect(result[5].id).toBe(2);
});

test('renameById', () => {
    const newName = 'New product name';
    const result = renameById(products, 4, newName);
    expect(result[3].name).toBe(newName);
});

// test('deleteById', () => {
//     const findId = 4;
//     const result = deleteById(products, findId);
//     expect(result.find(product => product.id === findId)).toBeUndefined();
// });

// test('searchAllParameters', () => {
//     const result = searchAllParameters(products, 'Milk');
//     expect(result[0].id).toBe(1);
// });