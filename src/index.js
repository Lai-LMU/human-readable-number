module.exports = function toReadable (number) {
    let converter = require('number-to-words');
    let result = converter.toWords(number);
    result =result.replace("-", " ");
    return result;
}
