module.exports = class ErrorHandler extends Error {
    constructor(statusCode, customCode, message = '') {
        super(message);
        this.statusCode = statusCode;
        this.customCode = customCode;

        Error.captureStackTrace(this, this.constructor);
    }
};
