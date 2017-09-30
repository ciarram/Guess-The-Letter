var computerGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var win = 0;
var loss = 0;
var guessLeft = 9;
var array = [];

var compLetter = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    document.onkeyup= function(event){
    var playerGuess = event.key;
    array.push(playerGuess);
    console.log(array);
    console.log('compLetter = %s',compLetter);
    document.getElementById("guessesdown").innerHTML = "Your Guesses so far: " + array;
    
    if(playerGuess == compLetter){
        console.log("player wins!");
        win++;
        document.getElementById("wincount").innerHTML = "Wins:" + win ;
        //I still need to have the letters stay on the page after each have been tyoed and another one is typed
        document.getElementById("numofguess").innerHTML = "Guesses Left: 9"
        guessLeft = 9;
        compLetter = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        array = [];
    }else{
        console.log("you lose a guess");
        guessLeft--;
        document.getElementById("numofguess").innerHTML = "Guesses Left: " + guessLeft ;
    }

    if(guessLeft == 0 ){
        console.log("start over");
        loss++;
        document.getElementById("losscount").innerHTML = "Losses: " + loss ;
        document.getElementById("numofguess").innerHTML = "Guesses Left: 9";
        compLetter = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        guessLeft = 9;
        array = [];
    }

}