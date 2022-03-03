const DB = require('./connection');

const getAll = async () => {
  const SQL = 'SELECT * FROM StoreManager.products;';
  const [result] = await DB.execute(SQL);

  return result;
};

const getById = async (id) => {
    const SQL = 'SELECT * FROM StoreManager.products WHERE id=?;';
    const [result] = await DB.execute(SQL, [id]);
    // console.log('model', id);

    // console.log(result);
    return result;
};
  
module.exports = {
  getAll,
  getById,
};