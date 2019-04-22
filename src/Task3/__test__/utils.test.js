const {
    canUserBuyProduct,
    store,
} = require('../store');
const {vasa, ira} = require('../user');

test('Return false if not enough money', () => {
    const result = canUserBuyProduct(ira, store.products[0])
    expect(result).toBe(false)
});

test('Return true if enough money', () => {
    const result = canUserBuyProduct(vasa, store.products[0])
    expect(result).toBe(true)
});


test('A minor cannot buy beer or cigarettes', () => {
    const result1 = canUserBuyProduct(vasa, store.products[1])
    expect(result1).toBe(false)
    const result2 = canUserBuyProduct(vasa, store.products[2])
    expect(result2).toBe(false)
});


test('Adult can buy beer or cigarettes', () => {
    const result1 = canUserBuyProduct(ira, store.products[1])
    expect(result1).toBe(true)
    const result2 = canUserBuyProduct(ira, store.products[2])
    expect(result2).toBe(true)
});
