//Snake>water | Water<snake  | gun<water
//Snake<gun   | water>gun    | gun>snake

let WATER = 0;
let SNAKE = 1;
let GUN = 2;
let score = 0;
let computer_score = 0;
let user_input;
let run = 0;
let random;

let B=document.body;
B.style.background="black";
B.style.color="white";
B.style.textAlign="center";


alert("PRESS 0 TO CHOOSE WATER 1 FOR SNAKE AND 2 FOR GUN!");


while (run <= 5) {

    random = Math.floor(Math.random() * (GUN - SNAKE - WATER + 2));
    
    user_input = prompt("ENTER YOUR FIGHTER");
    user_input = Number.parseInt(user_input);
    alert(`Computer chose ${random}`);

    // if computer choose 0 (water)
    if (random == 0 && user_input == 0) {
        alert(`It's a draw`);
    }

    else if (random == 0 && user_input == 1) {
        alert(`YOU WON !`);
        score += 10;

    }
    else if (random == 0 && user_input == 2) {
        alert(`YOU LOOSE !`);
        computer_score += 10;
    }

    // if computer choose 1 (SNAKE)

    else if (random == 1 && user_input == 1) {
        alert(`It's a draw`);


    }
    else if (random == 1 && user_input == 0) {
        alert(`YOU LOOSE!`);
        computer_score += 10;
    }

    else if (random == 1 && user_input == 2) {
        alert(`YOU WIN !`);
        score += 10;

    }

    //if computer choose 2 (GUN) 
    else if (random == 2 && user_input == 2) {
        alert(`It's a draw`);
    }

    else if (random == 2 && user_input == 0) {
        alert(`YOU WIN !`);
        score += 10;
    }

    else if (random == 2 && user_input == 1) {
        alert(`YOU LOOSE !`);
        computer_score += 10;
    }

    else {
        alert(`COMPUTER says: Send a fighter and not an IMPOSTER`);
    }
    run++;
}
document.write(`&nbsp; YOUR SCORE IS: ${score}&nbsp;`);
document.write(`&nbsp;COMPUTER'S SCORE IS: ${computer_score}&nbsp;`);

if (score > computer_score) {
    document.write(`       YOU WON ! :-)\t     `);
}
else if (score < computer_score) {
    document.write(`&nbsp; YOU LOOSE! :-( `);
}

document.write(`<br>THANKS FOR PLAYING`);
console.log("User score", score);
console.log(computer_score);





