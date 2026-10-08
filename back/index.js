const express = require('express');
const app = express()
const port = 3000
const cargoRoutes = require('./routes/cargoRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const pool = require('./db/db.js');
app.use(express.json());
const pessoaRoutes = require('./routes/pessoaRoutes');
app.use('/pessoas', pessoaRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/cargos', cargoRoutes);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);