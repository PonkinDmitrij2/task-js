const products = require('./products');

/*
 * For this task need use standard Js methods for array
 * Array.prototype.*
 * DOC - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/

/**
 * @return product with the passed id
 */
function getById(products, id) {
  return products.find(product => product.id === id);
}

/**
 * @return products sorted in descending order
 */
function sortedDescending(products) {
  return products.slice().sort((a, b) => {
    return b.cost - a.cost;
  });
}

/**
 * @return products sorted in ascending order
 */
function sortedAscending(products) {
  return products.slice().sort((a, b) => {
    return a.cost - b.cost;
  });
}


/**
 * Find product and change name
 * @return update products
 */
function renameById(products, id, newName) {
  getById(products, id).name = newName;
  return products;
}

/**
 * Find and delete product
 * @return update products
 */
function deleteById(products, id) {
  products.splice(products.indexOf(getById(products, id)), 1);
  return products;
}

/**
 * Search by name, cost or id
 * Find all product which contain the search string in parameters.
 */
function searchAllParameters(products, search) {
  return products.filter(product => {
    return Object.values(product).toString().includes(search);
  });
}

/**
 * @return product with max cost
 */
function getMaxCost(products) {
  return products.reduce((prev, current) => {
    if (prev.cost < current.cost) {
      return current;
    }
    return prev;
  });
}

/**
 * @return product with min cost
 */
function getMinCost(products) {
  return sortedAscending(products)[0];
}

module.exports = {
    getMaxCost,
    getMinCost,
    getById,
    sortedDescending,
    sortedAscending,
    renameById,
    deleteById,
    searchAllParameters,
};
