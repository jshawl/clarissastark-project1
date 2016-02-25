

+ Technologies used

I initially used some jQuery, but I didn't really understand it, so went back and used just javascript, HTML and CSS.

+ Explanation of approach taken, installation instructions

To start off with my concentration game, I listed the bare-minimum features for a bronze plan, then the gold plan with all the bells and whistles, then what seemed achievable for a silver plan.

  Bronze:
    + builds a game grid of cards
    + each card has a pair on the "back"
    + clicking on cards turns them over
    + one player

  Silver:
    + Matched cards don't flip back over
    + Unmatched pairs flip back over after a short amount of time
    + Game ends when all pairs are revealed, and asks if you'd like to play again.

  Gold:
    + User chooses from different themed decks
    + User is timed and scored
    + The timer is visible on the page
    + The score incorporates speed
    + Increase difficulty by creating a bigger board

From there, I pseudocoded in JS to build the bronze-level game.

I started off building a card grid with divs, and went down a rabbit hole of making the the cards flip over with CSS – then started over, setting the design elements for the grid in CSS and using JS to build the grid.

I ran into trouble getting the array of colors to be "matched" and worked with Jessie to build a matching function for the "data-color" attribute – ending the game also wasn't working until I added the conditional into the function that checks if cards are a match.

+ Unsolved problems

If a user clicks on the same card twice, that 'counts' as flipping over two cards, and it adds up as a match.

I added a timer that counts up, but can't figure out how to get it to display on the page and how to incorpate the timing into the game ending.

+ At least 5 user stories.

As a user, I can start a new game in the middle of a game if I want to jump ship.
As a game player, I want scoring because I want to see how my concentration ability improves.
As a person with political opinions, I want to be able to customize the deck to something less polarizing than Bernie Sanders.
As an adult with decent working memory, I want to be able to make the game more difficult.
As a competitive person, I want to compare my score to others to see where I rank.
