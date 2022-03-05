const ProductModel = require('../models/products');

const getAll = async () => ProductModel.getAll();

const getById = async (id) => ProductModel.getById(id);

const delById = async (id) => ProductModel.delById(id);

const upDateById = async (id) => ProductModel.delById(id);

const create = async (name, quantity) => {
    console.log('service', name);

    const all = await ProductModel.getAll();
    console.log('service2', all);

    const notUnique = all.some((product) => product.name === name);
    console.log('service3', notUnique);

    if (notUnique) return false;

    const createdId = await ProductModel.create(name, quantity);
    const product = {
        id: createdId,
        name,
        quantity,
    };
    console.log('service3', product);
    
    return product;
};

module.exports = {
    getAll,
    getById,
    delById,
    upDateById,
    create,
};
