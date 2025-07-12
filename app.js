const express = require('express');
const app = express();
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
