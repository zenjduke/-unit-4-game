
// This code will run as soon as the page loads
window.onload = function() {
	purse.reset();
	$(".crystal").on("click", purse.result);
	$("#reset").on("click", purse.reset);
	$("#play").on("click", purse.play);
	$("#bank").html("$" + purse.bank);
	$("#score").html("$" + score);
  };
  
  var score = 0;
  var wins = 0;
  var losses = 0;
  
  
  // My purse object
  var purse = {
  
	random: function(max, min) {
	  return Math.floor(Math.random() * max) + min;
	},
  
	setCrystalValues: function() {
	  this.crystalBlue = this.random(13,1);
	  this.crystalPink = this.random(13,1);
	  this.crystalOrange = this.random(13,1);
	  this.crystalGold = this.random(13,1);
		console.log(this.crystalBlue);
		console.log(this.crystalPink);
		console.log(this.crystalOrange);
		console.log(this.crystalGold);
	},
  
	reset: function() {
	  console.log("made it");
	  // Reset values of bank and rupees and change the display of purse to $0.
	  score = 0;
	  purse.bank = purse.random(100,13);
	  purse.setCrystalValues();
	  
	  $("#score").text("$0");
	  $("#bank").text("$" + purse.bank);
  
	},
  
	playfirst: function() {

		event.preventDefault();
		
		$("#bank".text(purse.bank));
		$("#score").text("$" + score);
	},
	
	result: function(){

		event.preventDefault();
  
		var crystalColor = $(this).attr("id");
		console.log(crystalColor);
		score = score + purse[crystalColor];
		$("#score").text("$" + score);
  
		if (score == purse.bank){
		  $("#score").text("You win!");
		  wins++;
		  $("#wins").text("Wins: " + wins);
		  setTimeout(purse.reset, 1000);
		}
		
		else if (score > purse.bank) {
		  $("#score").text("Try again!");
		  losses++;
		  $("#losses").text("Losses: " + losses);
		  setTimeout(purse.reset, 1000);
		}
	},
  
  };

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1000px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly links.
			$('.scrolly').scrolly();

		// Prioritize "important" elements on narrow.
			skel.on('+narrow -narrow', function() {
				$.prioritize(
					'.important\\28 narrow\\29',
					skel.breakpoint('narrow').active
				);
			});

	});

})(jQuery);