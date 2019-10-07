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
    let morse_letter = '';
    let abc_letter = '';
    let abc_string = '';
     
    for ( let j=0; j < expr.length; j=j+10) {
        
        if (expr.slice(j,j+1) == '*') {
            abc_letter = ' ';
        } else {
            for (i=j; i < j+10; i=i+2) {
                let morse_symbol = (expr.slice(i,i+2) == '00') ? '' :
                (expr.slice(i,i+2) == '10') ? '.' :
                (expr.slice(i,i+2) == '11') ? '-' :
                'error';

               
                morse_letter = morse_letter + morse_symbol;
                
                abc_letter =  MORSE_TABLE[morse_letter];
                
            }
            morse_letter = '';
        }
       
        abc_string = abc_string + abc_letter;
        

    }
    
    return abc_string;



    
}

module.exports = {
    decode
}