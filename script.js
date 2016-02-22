var allCards = document.querySelectorAll(".card");

// This tells indiviudual cards by class ID to flip

$("#card0, #card1, #card2, #card3").click(flip);

function flip() {
  $(this).toggleClass('flipped');
}

// This randomizes the colors on the back of the cards in the grid

function randomizeDeck() {
  var cardBack = '0123'.split("");
  var color = '#';
  for (var c = 0; c < allCards.length; c++){
    color += cardBack[Math.round(Math.random() * 4)];
  }
  return color;
}

$(".card").each(function() {
    $(this).css("background-color", randomizeDeck());
});



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
if click event on cell value = click event on second cell value, score increases by one


*/
