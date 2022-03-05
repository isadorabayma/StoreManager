const DB = require('./connection');

const getAll = async () => {
  const SQL = 'SELECT * FROM StoreManager.products;';
  const [result] = await DB.execute(SQL);

  return result;
};

const getById = async (id) => {
    const SQL = 'SELECT * FROM StoreManager.products WHERE id=?;';
    const [arrayResult] = await DB.execute(SQL, [id]);
    // const [result] = arrayResult;

    return arrayResult;
};

const delById = async (id) => {
  const SQL = 'DELETE FROM StoreManager.products WHERE id=?;';
  const [result] = await DB.execute(SQL, [id]);

  return result;
};

const upDateById = async (id, name, quantity) => {
  console.log('M props', id, name, quantity);

  const SQL = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;';
  const [result] = await DB.execute(SQL, [name, quantity, id]);
  return result;
};

const create = async (name, quantity) => {
  const SQL = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?,?)';
  const [result] = await DB.execute(SQL, [name, quantity]);

  return result.insertId;
};
  
module.exports = {
  getAll,
  getById,
  delById,
  create,
  upDateById,
};