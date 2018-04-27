
// This code will run as soon as the page loads
window.onload = function() {
  $("#rupBlue").on("click", purse.playBlue);
  $("#rupOrange").on("click", purse.playOrange);
  $("#rupGold").on("click", purse.playGold);
  $("#rupPink").on("click", purse.playPink);
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

  bank: Math.floor(Math.random() * 100) + 19,
  crystalBlue: Math.floor(Math.random() * 13) + 1, 
  crystalPink: Math.floor(Math.random() * 13) + 1,
  crystalOrange: Math.floor(Math.random() * 13) + 1,
  crystalGold: Math.floor(Math.random() * 13) + 1,
  

  reset: function() {

    // Reset values of bank and rupees and change the display of purse to $0.

    score = 0;
    purse.bank = Math.floor(Math.random() * 100) + 19;
    purse.crystalBlue = Math.floor(Math.random() * 13) + 1;
    purse.crystalPink = Math.floor(Math.random() * 13) + 1;
    purse.crystalOrange = Math.floor(Math.random() * 13) + 1;
    purse.crystalGold = Math.floor(Math.random() * 13) + 1;

    
    $("#score").text("$0");
    $("#bank").text("$" + purse.bank);


  },

  playfirst: function() {
      
      $("#bank".text(purse.bank));
      $("#score").text("$" + score);
  },

  playBlue: function() {
      
      score = score + purse.crystalBlue;
      $("#score").text("$" + score);
      if (score == purse.bank){
        $("#score").text("You win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        setTimeout(purse.reset, 2000);
      }
      
      else if (score > purse.bank) {
        $("#score").text("Try again!");
        losses++;
        $("#losses").text("Losses: " + losses);
        setTimeout(purse.reset, 2000);
      }
  },

  playPink: function(){

    score = score + purse.crystalPink;
    $("#score").text("$" + score);
    if (score == purse.bank){
      $("#score").text("You win!");
      wins++;
      $("#wins").text("Wins: " + wins);
      setTimeout(purse.reset, 2000);
    }
    
    else if (score > purse.bank) {
      $("#score").text("Try again!");
      losses++;
      $("#losses").text("Losses: " + losses);
      setTimeout(purse.reset, 2000);
    }
  },
  
  playOrange: function(){

    score = score + purse.crystalOrange;
    $("#score").text("$" + score);
    if (score == purse.bank){
      $("#score").text("You win!");
      wins++;
      $("#wins").text("Wins: " + wins);
      setTimeout(purse.reset, 2000);
    }
    
    else if (score > purse.bank) {
      $("#score").text("Try again!");
      losses++;
      $("#losses").text("Losses: " + losses);
      setTimeout(purse.reset, 2000);
    }
  },

  playGold: function(){

    score = score + purse.crystalGold;
    $("#score").text("$" + score);
    if (score == purse.bank){
      $("#score").text("You win!");
      wins++;
      $("#wins").text("Wins: " + wins);
      setTimeout(purse.reset, 2000);
    }
    
    else if (score > purse.bank) {
      $("#score").text("Try again!");
      losses++;
      $("#losses").text("Losses: " + losses);
      setTimeout(purse.reset, 2000);
    }
  },


};





