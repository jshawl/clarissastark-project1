// var cardArray = document.querySelectorAll(".card");
var num = (Math.floor(Math.random()*4));
var colors = ["red", "blue", "orange", "green", "purple", "yellow", "red", "blue", "orange", "green", "purple", "yellow"];
var matchedTiles = 0;
var memoryValues = [];
var memoryTileIds = [];

// This sets up a new board

function newBoard(){
  flippedTiles = 0;
  for (var i = 0; i < colors.length; i++){
    var tile = document.createElement("div");
    tile.id = "tile_" + i;
    tile.setAttribute("data-color", colors[i]);
    tile.addEventListener("click", function(){
      memoryFlipTile(this);
    });
    document.getElementById("grid").appendChild(tile);
  }
}

// This flips over cards and determines if two cards are a match, and either flips them back over or leaves matched cards face up

function memoryFlipTile(tile){
  var val = tile.getAttribute("data-color");
  tile.style.backgroundColor = val;
  memoryValues.push(val);
  memoryTileIds.push(tile.id);
  if (memoryValues.length == 2){
    if (isAndIsMatch(memoryValues[0],memoryValues[1]) === false){
      this.setTimeout(flipBack, 700);
    }else if (isAndIsMatch(memoryValues[0],memoryValues[1]) === true){
      matchedTiles += 2;
      memoryValues = [];
      memoryTileIds = [];
    }
  }else if (matchedTiles === colors.length){
    alert("You've won! Starting new game now.");
    newBoard();
  }
}

// This flips unmatched cards back over

function flipBack(){
  var tile1 = document.getElementById(memoryTileIds[0]);
  var tile2 = document.getElementById(memoryTileIds[1]);
  tile1.style.backgroundColor = "teal";
  tile2.style.backgroundColor = "teal";
  memoryValues = [];
  memoryTileIds = [];
}

// This deteremines if two items are a match, excluding 'undefined' "" & null

function isAndIsMatch(a,b){
  return !!a && !!b && a === b;
}

// This puts images into the card deck array

function startImage(){
    document.getElementById("pic").src = imgArray[0].src;
}


// This shuffles the deck

// Array.prototype.shuffleDeck = function(){
//   var i = this.length, j, temp;
//   while(--i > 0){
//     temp = this[j];
//     this[j] = this[i];
//     this[i] = temp;
//   }
// };

// This randomizes the colors on the back of the cards in the grid

// $('document').ready(function(){
//   var colors = ["red", "blue", "orange", "green", "purple", "yellow"];
//   $('.card').each(function() {
//     var rand = Math.floor(Math.random()*colors.length);
//     $(this).css("background-color", colors[rand]);
//   });
// });

// $("#card0, #card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8, #card9, #card10, #card11").click(flip);
//
// function flip() {
//   $(this).toggleClass('flipped');
// }


// This randomizes the colors on the back of the cards in the grid

// colors.sort(function() { return 0.5 - Math.random();});


//5th attempt
// var r = Math.floor(Math.random() * colors.length);
// document.getElementsByClassName("card").setAttribute("background", colors[r]);

//4th attempt

// $("#card0").css("background-image", "url(" + Math.floor(Math.random()*6) + ".gif)");

// $("#card1").css("background-image", "url(" + Math.floor(Math.random()*6) + ".gif)");

// $("#card2").css("background-image", "url(" + Math.floor(Math.random()*6) + ".gif)");

// $("#card3").css("background-image", "url(" + Math.floor(Math.random()*6) + ".gif)");


// 2nd attempt
// $(document).ready(function() {
//   $('.main').each(function(){
//     var hue =
//     $(this).css("backgroundColor", hue);
//   });
// });

// 1st attempt
// function randomizeDeck() {
//   var cardBack = '0123'.split("");
//   var color = '#';
//   for (var c = 0; c < allCards.length; c++){
//     color += cardBack[Math.round(Math.random() * 4)];
//   }
//   return color;
// }
//
// $(".card").each(function() {
//     $(this).css("background-color", randomizeDeck());
// });
//
// randomizeDeck();


// 3rd attempt

// $('#card1').toggle(
//     function() {
//         $('#card1 .card').addClass('flipped');
//     },
//     function() { $('#card1').removeClass('flipped');
//     }
// );
//
// $('#card2').bind('click mouseleave', function() {
//     $('#card2 .card').toggleClass('flipped');
// });
//
// $('#card3').bind({
//     click: function() {
//         $('#card3 .card').toggleClass('flipped');
//     },
//     mouseleave: function() {
//         $('#card3 .card').toggleClass('flipped');
//     }
// });

// ('#card4').bind({
//     click: function() {
//         $('#card4 .card').toggleClass('flipped');
//     },
//     mouseleave: function() {
//         $('#card4 .card').toggleClass('flipped');
//     }
// });

//
// $('.flip').click(function(){
//      $(this).find('.card').addClass('flipped').toggle(function(){
//          $(this).removeClass('flipped');
//      });
//      return false;
//  });

/* pseudocoding

+Think about not having too many global variables

var gameCard =
+Start game
randomly assign colors to cells
click event on cell reveals the color

scoreing
if click event on cell value = click event on second cell value, var score increases by one


*/
