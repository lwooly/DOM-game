// Make a game:

// # Battleship
// ## Basic version
// Singleplayer, computer places ships, you are guessing which tiles have enemy ships, and attempting to beat your lowest number of guesses to hit all ships.

// - render a grid ============================================
// - Have rules so ships are lines and a set size
//   - Only let ships go in vertical or horizontal lines?

// - Randomly place ships for the player to try and hit
//   - give it a toggleable class on selection =======================================
//   - random number generator to pick column, then another to pick row for starting ship tile ======================================
//     - another random gen to pick horizontal or vertical ========================================
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//   TODO abstract this out into a single function to generate one ship made of 3-4 pieces
let direction = getRndInteger(0,1)
console.log(direction)
let xAxis = getRndInteger(1, 10)
console.log(xAxis)
let yAxis = getRndInteger(1, 10)
console.log(yAxis)
let row = (xAxis + 9).toString(36)
console.log(row)
let ship1class = row.concat('.', yAxis)
console.log(ship1class)

const ship1 = document.querySelectorAll('.' + row)[yAxis-1]
console.log(ship1)
ship1.classList.add('ship')


// - have the tiles be clickable =====================================
//   - check how event listeners work with regards to clicking specific tiles ==============================
//   - give it a toggleable class on click =========================================

//selectors
const board = document.querySelector('.board')

//bindings
board.addEventListener('click', (event) => {
    console.log(event)
    const selectedTile = event.target
    console.log(selectedTile.classList)
    selectedTile.classList.toggle('shot')
    console.log(selectedTile.classList)

    if(selectedTile.classList.contains('ship')) {
        console.log('hit')
    }
})


// - detect if a ship is below on click ==========================
//   - then render ship
// - Track number of clicks for score
//   - eventlistener that increments score variable on click
// - Button to reset and play again