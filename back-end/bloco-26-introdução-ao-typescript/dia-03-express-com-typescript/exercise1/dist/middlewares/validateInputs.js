"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const properties = ['name', 'email', 'password'];
const validateProperties = (user) => {
    properties.forEach((property) => {
        if (!Object.prototype.hasOwnProperty.call(user, property)) {
            console.log('PROPERTY', property, !Object.prototype.hasOwnProperty.call(user, property));
            return [false, property];
        }
    });
    return [true, null];
};
const validateValues = (user) => {
    const entries = Object.entries(user);
    entries.forEach((entry) => {
        const [key, value] = entry;
        console.log('VALUE', value);
        if (!value) {
            return [false, key];
        }
    });
    return [true, null];
};
const validationUser = (req, res, next) => {
    const user = req.body;
    let [valid, property] = validateProperties(user);
    console.log(`IS VALID PROPERTY: ${valid} ${property}`);
    if (!valid) {
        return res.status(404).send(`O campo ${property} é obrigatório.`);
    }
    [valid, property] = validateValues(user);
    console.log(`IS VALID VALUES: ${valid} ${property}`);
    if (!valid) {
        return res.status(404).send(`O campo ${property} não pode ser nulo ou vazio.`);
    }
    next();
};
exports.default = validationUser;
