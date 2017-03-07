var wins = 1;
var losses = 1;
var randomNumber = Math.floor(Math.random() * 250);
var crystalPoints = Math.floor(Math.random() * 50);
var userTotalScore = 0;
var winsArray = [];
var lossesArray = [];

//Resetting the Game function//
function reset() {
	userTotalScore = 0;
}

//Running the start function as soon as the document is ready, onload//
$( document ).ready(function() {
	start();
});

//When the users clicks on any of the ceystals a random number will be added to the users' total score and added to the score number html element//
$("#crystals").on("click", function (){
	userTotalScore = userTotalScore + crystalPoints;
	$("#score-number").html(" " + userTotalScore);
	initGame();
})

//Choosing a random number at start of the game and if the users' total score is equal to random number, the wins will increase by one, if not the losses will decrease bye one//
function initGame() {
	$("#random-number").html("Random Number: " + randomNumber);
	if (userTotalScore === randomNumber) {
		$("#wins").append(" " + wins++);
		reset();
	} else if (userTotalScore > randomNumber){
		$("#losses").append(" " + losses++);
		reset();
	}
}

function start() {
	initGame();
}


console.log(randomNumber);