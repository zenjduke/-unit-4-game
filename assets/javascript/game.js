
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
      
      $("#bank".text(purse.bank));
      $("#score").text("$" + score);
  },
  
  result: function(){

      var crystalColor = $(this).attr("id");
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





