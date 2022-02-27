const DB = require('./connection');

const getAll = async () => {
  const SQL = 'SELECT * FROM products;';
  const [result] = await DB.execute(SQL);

  return result;
};

const getById = async (id) => {
    const SQL = 'SELECT * FROM products WHERE id=?;';
    const [result] = await DB.execute(SQL, [id]);
  
    return result;
};
  
module.exports = {
  getAll,
  getById,
};