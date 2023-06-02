function addProduct(name, price) {
  
  validateProductData(name, price);

  return saveProduct(name, price);
}

function inputIsValid(name, price) {
  return isEmpty(name) && hasMinValue(price)
}

function isEmpty(value) {
  return !value || value.trim() === '';
}

function hasMinValue(value) {
  return !value || value < 0;
}

function showErrorMessage(message) {
  console.log(message);
}

function validateProductData(name, price) {
  if (!inputIsValid(name, price)) {
    showErrorMessage('Invalid input - product was not created.');
    return;
  }
}

function saveProduct(name, price) {
  const product = {
    id: generateRandomId(name),
    name: name,
    price: price,
  };

  database.insert('products', product);
  return product;
}

function generateRandomId(baseValue) {
  return baseValue + '_' + Math.random().toString();
}

// describe(function () {
//   it('should create a product for valid names and prices', function () {
//     const createdProduct = addProduct('Carpet', 19);
//     expect(createdProduct).not.toBeUndefined();
//   });

//   it('should generate a product id that contains the product name', function () {
//     const createdProduct = addProduct('Book', 19);
//     expect(createdProduct.id).stringContaining('Book');
//   });
// });
