var wins = 1;
var losses = 1;
var randomNumber = Math.floor(Math.random() * 250);
var crystalPoints = Math.floor(Math.random() * 50);
var userTotalScore = 0;
var winsArray = [];
var lossesArray = [];

function reset() {
	userTotalScore = 0;
}

$( document ).ready(function() {
	start();
});

$("#crystals").on("click", function (){
	userTotalScore = userTotalScore + crystalPoints;
	$("#score-number").html(" " + userTotalScore);
	initGame();
})


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