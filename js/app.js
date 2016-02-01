
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

var randomNumber = 1;
var clickerCount = 0;
var newGame = function() {
  randomNumber = Math.floor(Math.random()*101);
    };

newGame();

$(".new").click(function(){
  location.reload(true);
  $('#count').text(clickerCount = 0);
  $('#guessList').empty();
  newGame();
});

$('#guessButton').click(function(event) {
  event.preventDefault();
  var numberGuess = $('input#userGuess').val()

  /*Evaluate the input*/
  
  if (isNaN(numberGuess) || numberGuess < 1 || numberGuess > 100) {
    $("#feedback").text("Enter a number from 1 to 100.");
  }

  /*Evaluate the number*/

  else {
    if (randomNumber - numberGuess > 20 || randomNumber - numberGuess < -20) {
      $("#feedback").text("Cold");
      }
    else if (randomNumber - numberGuess > 10 || randomNumber - numberGuess < -10) {
      $("#feedback").text("Warm");
      }
    else {
      $("#feedback").text("That's it!");
      };

  /*Counter and record events*/

    $('#count').text(clickerCount += 1);
    $('#guessList').append('<li>' + numberGuess + '</li>');
  };

});

});


