var allCards = document.querySelectorAll(".card");

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

// function flipIfClicked() {
//   if ($(this).hasClass('clickedTag')){
//     $('.card').toggleClass('flipped');
//   }else{
//     alert("Please click on a card.");
//   }
// }

$("#card0, #card1, #card2, #card3").click(flip);

// $(".card").click(function(){
//   (this).attr('class').toggleClass('flipped');
// }
// );

function flip() {
  $(this).toggleClass('flipped');
}


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
