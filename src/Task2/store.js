const store = {
    products: [
        {
            name: 'Milk',
            cost: 120
        },
        {
            name: 'Beer',
            cost: 60
        },
        {
            name: 'Cigarettes',
            cost: 90
        },
    ],
}

function canUserBuyProduct(user, product) {
    if (user.money >= product.cost && ((product.name === 'Beer' || product.name === 'Cigarettes') && user.age >= 18)) {
        return true
    }
    return false
}

function addProduct(name, cost) {
    store.products = [
        ...products,
        {
            name,
            cost,
        }
    ]
}

module.exports = {
    store,
    canUserBuyProduct,
}
