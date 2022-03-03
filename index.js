require('dotenv').config();
const express = require('express');
require('express-async-errors');

const { errorMiddleware } = require('./middlewares/indexMiddlewares');
// const productsRouter = require('./routes/productsRoutes');
// const salesRouter = require('./routes/salesRoutes');
const productsController = require('./controllers/product');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// app.use('/products', productsRouter);
// app.use('/sales', salesRouter);
app.get('/products/:id', productsController.getById);
app.get('/products', productsController.getAll);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
