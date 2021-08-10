module.exports = {
    PASSWORD_REGEXP: new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/),
    EMAIL_REGEXP: new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/),
    PHONE: new RegExp('^[+]*[0-9]{5,20}$'),
    ONLY_LETTERS: new RegExp(/^[a-zA-Zа-яА-ЯЇїІі]+$/),
};
