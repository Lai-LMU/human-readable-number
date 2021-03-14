module.exports = function toReadable (number) {
    var TEN = 10;
    var ONE_HUNDRED = 100;
    var ONE_THOUSAND = 1000;
    var ONE_MILLION = 1000000;

    var LESS_THAN_TWENTY = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    
    var TENTHS_LESS_THAN_HUNDRED = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    var words;
    var num = parseInt(number, 10);
    words = generateWords(num);
    return words;
    

    
    function generateWords(number) {
        var remainder, word,
            words = arguments[1];
    
        // We’re done
        if (number === 0) {
            return !words ? 'zero' : words.join(' ').replace(/,$/, '');
        }
        // First run
        if (!words) {
            words = [];
        }
        // If negative, prepend “minus”
        if (number < 0) {
            words.push('minus');
            number = Math.abs(number);
        }
    
        if (number < 20) {
            remainder = 0;
            word = LESS_THAN_TWENTY[number];
    
        } else if (number < ONE_HUNDRED) {
            remainder = number % TEN;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
            // In case of remainder, we need to handle it here to be able to add the “-”
            if (remainder) {
                word += ' ' + LESS_THAN_TWENTY[remainder];
                remainder = 0;
            }
    
        } else if (number < ONE_THOUSAND) {
            remainder = number % ONE_HUNDRED;
            word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';
    
        } else if (number < ONE_MILLION) {
            remainder = number % ONE_THOUSAND;
            word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';
    
        } 
    
        words.push(word);
        return generateWords(remainder, words);
    }
    
}
