const errorMiddleware = require('./errorMiddlewares');
const { nameVal, quantityVal } = require('./products');
const { productIdVal, quantitySaleVal } = require('./sales');

  module.exports = {
    errorMiddleware,
    nameVal,
    quantityVal,
    productIdVal,
    quantitySaleVal,
  }; 
