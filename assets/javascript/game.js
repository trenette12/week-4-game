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

$("#crystals").on("click", function (){
	$("#random-number").html(randomNumber);
	userTotalScore = userTotalScore + crystalPoints;
	initGame();
})


function initGame() {
	if (userTotalScore === randomNumber) {
		$("#wins").append(" " + wins++);
		reset();
	} else if (userTotalScore > randomNumber){
		$("#losses").append(" " + losses++);
		reset();
	}
}

console.log(randomNumber);