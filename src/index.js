const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
    let decoded = String();
    let result = String();

    let size = 10;
    

    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    let subarray = arr.slice((i * size), (i * size) + size).join('');
    
    if (subarray == '**********') {
            result += ' ';
        } else {
            for (let k = 0; k < subarray.length; k += 2) {
                switch (subarray.slice(k, k + 2)) {
                    case '10':
                        decoded += '.';
                        break;
                    case '11':
                        decoded += '-';
                        break;
                    default:
                        continue;
                }
            }
            result += MORSE_TABLE[decoded];
        }

        decoded = '';
    }
    return result;
    
}
    

module.exports = {
    decode
}