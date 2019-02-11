var games = ["halo", "mario", "uncharted", "pokemon", "titanfall", "zelda", "overwatch"]


var randomGame = "";
var lettersOfWord = []
var space = 0;
var correctAnswers = [];
var wrongAnswers = [];
var wins = 0;
var losses = 0;
var livesRemaining = 9;


function Game() {

    randomGame = games[Math.floor(Math.random() * games.length)];
    lettersOfWord = randomGame.split("");
    space = lettersOfWord.length;


    for (var i = 0; i < space; i++) {
        correctAnswers.push("_");
    }

    document.getElementById("game-title").innerHTML = "  " + correctAnswers.join("  ");

}



function reset() {
    livesRemaining = 9;
    wrongAnswers = [];
    correctAnswers = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;
   
    for (var i = 0; i < space; i++) {
        if (randomGame[i] == letter) {
            letterInWord = true;
        }
    }
   
    if (letterInWord) {
        for (var i = 0; i < space; i++) {
            if (randomGame[i] == letter) {
                correctAnswers[i] = letter;
            }
        }
    }
    else {
        wrongAnswers.push(letter);
        livesRemaining--;
    }
}

function complete() {
        if (lettersOfWord.toString() == correctAnswers.toString()) {
        wins++;
        reset()
        document.getElementById("image").src = "./assets/images/win.jpg"
        document.getElementById("winstoltal").innerHTML = " " + wins;
    } else if (livesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/007.jpg"
        document.getElementById("deathtoltal").innerHTML = " " + losses;
    }
   
    document.getElementById("game-title").innerHTML = "  " + correctAnswers.join(" ");
    document.getElementById("livesremaining").innerHTML = " " + livesRemaining;
}

Game()
document.onkeyup = function (event) {
    var attempts = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(attempts);
    complete();
    document.getElementById("wronganswers").innerHTML = "  " + wrongAnswers.join(" ");
}
