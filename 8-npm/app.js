const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('albab@gmail.m'))
console.log(validator.isMobilePhone('+6285665433', 'id-ID'))