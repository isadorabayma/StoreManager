const ProductModel = require('../models/products');

const getAll = async () => ProductModel.getAll();

const getById = async (id) => ProductModel.getById(id);

const delById = async (id) => ProductModel.delById(id);

const upDateById = async (id, name, quantity) => ProductModel.upDateById(id, name, quantity);

const create = async (name, quantity) => {
    const all = await ProductModel.getAll();

    const notUnique = all.some((product) => product.name === name);

    if (notUnique) return false;

    const createdId = await ProductModel.create(name, quantity);
    const product = {
        id: createdId,
        name,
        quantity,
    };
    
    return product;
};

module.exports = {
    getAll,
    getById,
    delById,
    upDateById,
    create,
};
