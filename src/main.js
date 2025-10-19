/* 

Note: only concerned with integers for now
Input text - 1 + 3 => [1, ' ', +, ' ', 3]
Lexer - tokenizes the input
Parser - goes through the tokens and creates an abstract syntax tree (AST)
Analyse and calculate - use the AST and perform type cheking and calculations/operations

*/

const readline = require('readline');
const {Lexer} = require('./Lexer');

async function getStdin() {
    const rl= readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question('> ', (inpput) => {
            rl.close();
            resolve(inpput);
        });
    });
}

async function main() {
    while (true) {
        const input = await getStdin();
        if (input === '$exit'){
            console.log("Exiting");
            break;
        } else if (input === '$clear') {
            console.clear();
            continue;
        } // add mor commands

        let lexer = new Lexer(input);
        lexer.tokenize();
    }

}

main()