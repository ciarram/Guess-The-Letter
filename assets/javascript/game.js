var computerGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var win = 0;
var loss = 0;
var guessLeft = 9;

var compLetter = computerGuess[Math.floor(Math.random() * computerGuess.length)];
document.onkeyup= function(event){
    var playerGuess = event.key;
    console.log('compLetter = %s',compLetter);
        
    if(playerGuess == compLetter){
        console.log("player wins!");
        win++;
        guessLeft = 9;
        compLetter = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    }else{
        console.log("you lose a guess");
        guessLeft--;
    }
if(guessLeft == 0 ){
        console.log("start over");
        loss++;
        compLetter = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        guessLeft = 9
    }

}
