const DB = require('./connection');

const getAll = async () => {
  const SQL = `
  SELECT s.id AS saleId, s.date, sp.product_id as productId, sp.quantity
  FROM StoreManager.sales AS s
  JOIN StoreManager.sales_products AS sp
  ON s.id = sp.sale_id;`;

  const [result] = await DB.execute(SQL);

  return result;
};

const getById = async (id) => {
  const SQL = `
  SELECT s.date, sp.product_id as productId, sp.quantity
  FROM StoreManager.sales AS s
  JOIN StoreManager.sales_products AS sp
  ON s.id = sp.sale_id
  WHERE s.id = ?;`;
  
  const [result] = await DB.execute(SQL, [id]);
  
  return result;
};

// https://www.sqlservertutorial.net/sql-server-basics/sql-server-update-join/
const upDateById = async (id, productId, quantity) => {
  const SQL = `
  UPDATE
      StoreManager.sales_products
    SET
      quantity = ?
    WHERE
      sale_id = ? 
      AND product_id = ?;`;
  
  const [result] = await DB.execute(SQL, [quantity, id, productId]);
  
  return result;
};
  
module.exports = {
  getAll,
  getById,
  upDateById,
};