module.exports = {
    // BAD REQUEST

    BAD_REQUEST: {
        customCode: 4000
    },

    EMAIl_EXISTS: {
        message: 'Email exist',
        customCode: 4001
    },

    NOT_VALID_ID: {
        message: 'Not valid id',
        customCode: 4003
    },

    NOT_VALID_TOKEN: {
        message: 'Token is not present',
        customCode: 4004
    },

    WRONG_EMAIL_OR_PASSWORD: {
        message: 'Wrong email or password',
        customCode: 4007
    },

    TOKEN_REQUIRED: {
        message: 'Token is required',
        customCode: 4008
    },

    // UNAUTHORIZED

    WRONG_TOKEN: {
        message: 'Something wrong with token',
        customCode: 4011
    },

    // NOT FOUND

    NOT_FOUND: {
        message: 'Record not found',
        customCode: 4041
    }
};
