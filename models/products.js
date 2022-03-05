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

// const upDateById = async (id, name, quantity) => {
//   const SQL = 'DELETE FROM StoreManager.products WHERE id=?;';
//   const [result] = await DB.execute(SQL, [id, name, quantity]);

//   return result;
// };
  
module.exports = {
  getAll,
  getById,
  delById,
};