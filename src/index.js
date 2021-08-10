const express = require('express');
require('dotenv').config();

const { PORT } = require('./configs/configs');
const { sequelize } = require('./dataBase');
const apiRouter = require('./routers/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            customCode: err.customCode || 0,
            message: err.message || ''
        });
});

app.use('/', apiRouter);

(async () => {
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`App listen ${PORT}`));
})();
