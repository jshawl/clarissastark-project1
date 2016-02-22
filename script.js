var allCards = document.querySelectorAll(".card");
//
// allCards.slice(this).addEventListener("click", flip);

function flip() {
  $('.card').toggleClass('flipped');
}
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
