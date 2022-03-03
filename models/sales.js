const DB = require('./connection');

const getAll = async () => {
  const SQL = 'SELECT * FROM StoreManager.sales;';
  const [result] = await DB.execute(SQL);

  return result;
};

const getById = async (id) => {
    const SQL = 'SELECT * FROM StoreManager.sales WHERE id=?;';
    const [result] = await DB.execute(SQL, [id]);

    return result;
};
  
module.exports = {
  getAll,
  getById,
};