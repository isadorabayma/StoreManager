require('dotenv').config();
const express = require('express');
require('express-async-errors');

const { errorMiddleware, quantitySaleVal,
   nameVal, quantityVal, productIdVal } = require('./middlewares/indexMiddlewares');
// const productsRouter = require('./routes/productsRoutes');
// const salesRouter = require('./routes/salesRoutes');
const productsController = require('./controllers/products');
const salesController = require('./controllers/sales');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// app.use('/products', productsRouter);
// app.use('/sales', salesRouter);
app.get('/products/:id', productsController.getById);
app.put('/products/:id', nameVal, quantityVal, productsController.upDateById);
app.delete('/products/:id', productsController.delById);
app.get('/products', productsController.getAll);
app.post('/products', nameVal, quantityVal, productsController.create);
app.get('/sales/:id', salesController.getById);
app.put('/sales/:id', productIdVal, quantitySaleVal, salesController.upDateById);
app.get('/sales', salesController.getAll);
app.post('/sales', productIdVal, quantitySaleVal);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
