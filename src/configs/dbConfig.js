module.exports = {
    HOST: 'localhost',
    USER: process.env.USER || 'postgres',
    PASSWORD: process.env.PASSWORD || 'root',
    DB: 'testTask',
    DIALECT: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
