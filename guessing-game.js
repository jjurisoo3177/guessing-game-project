
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 30;

const askGuess = () => {
    rl.question("Enter a guess: ", (answer) => {
        if (checkGuess(Number(answer))) {
            console.log('You win!');
            rl.close();
        } else {
            askGuess();
        }
    });

}

const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log('Too high.');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low.');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}
askGuess();
