

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
    + User chooses different decks
    + User is timed and scoreds
    + The score incorporates speed
    + Increase difficulty by creating a bigger board

From there, I pseudocoded in JS to build the bronze-level game

I started off building a card grid with divs, and went down a rabbit hole of making the the cards flip over with CSS – then started over, setting the design elements for the grid in CSS and using JS to build the grid.

I also started off using JQuery, but as mentioned above, recoded in just JS.

I ran into trouble getting the array of colors to be matched 

+ Unsolved problems

If a user clicks on the same card twice, that 'counts' as flipping over two cards, and it adds up as a match.

The game doesn't end or ask you if you'd like to play a new game.

+ At least 5 user stories.
