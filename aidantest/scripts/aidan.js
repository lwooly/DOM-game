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

// VARIABLES
const lowBound = 1
const highBound = 10
const limitBound = 8

// let direction = getRndInteger(0,1)
// console.log(direction)
let xAxis = getRndInteger(lowBound, highBound)
// console.log(xAxis)
let yAxis = getRndInteger(lowBound, highBound)
// console.log(yAxis)
let row = (xAxis + 9).toString(36)
// console.log(row)
let ship1class = row.concat('.', yAxis)
// console.log(ship1class)

const ship1 = document.querySelectorAll('.' + row)[yAxis-1]
console.log(ship1)
// ship1.classList.add('ship')



// Functions
// Generate direction for the ship [returns 'horizontal' or 'vertical' string]
function direction() {
    const dir = getRndInteger(0,1)
    if (dir) {
        return 'vertical'
    } else {
        return 'horizontal'
    }
}
// console.log(direction())

// Generate X and Y axis for a single point [returns number and letter for the point]
function getNumberAxis(low, high) {
    return getRndInteger(low-1, high-1)
}
// console.log('get y axis number function', getNumberAxis(lowBound, highBound))

function getLetterAxis(low, high) {
    const num = getRndInteger(low, high);
    const letter = (num + 9).toString(36).toUpperCase()
    const letter2 = (num + 10).toString(36).toUpperCase()
    const letter3 = (num + 11).toString(36).toUpperCase()
    return {
        letter: letter,
        letter2: letter2,
        letter3: letter3
    }
    // return letter.toUpperCase()
    // DEBUG
    // Returns number and letter for X axis, make sure they are correct
    // console.log(num + letter + letter2 + letter3)
    // return num + letter
}
// console.log('get x axis letter function', getLetterAxis(lowBound, highBound))

// console.log(1, String(1), '1')


// Test vertical ship
// get tile 1 coordinates
const tile1Y = getNumberAxis(lowBound, limitBound)
const tile1X = getLetterAxis(lowBound, highBound)
// console.log('get letter axis object', tile1X)
const tile1 = String(tile1Y + tile1X.letter)
// with the class selector period
const tile1period = String('.' + tile1Y + tile1X.letter)
console.log('tile 1 class code', tile1)
// get tile 2 coordinates
const tile2Y = tile1Y + 1
const tile2 = String(tile2Y + tile1X.letter)
console.log('tile 2 class code', tile2)
// get tile 3 coordinates
const tile3Y = tile1Y + 2
const tile3 = String(tile3Y + tile1X.letter)
console.log('tile 2 class code', tile3)
console.log({
    tile1: tile1,
    tile2: tile2,
    tile3: tile3
})

// console.log('getelementbyclassname', document.getElementsByClassName('1A'))
console.log('getelementbyclassname', document.getElementsByClassName(tile1))
const ship11 = document.getElementsByClassName(tile1)
console.log(ship11[0])
const ship12 = document.getElementsByClassName(tile2)
console.log(ship12[0])
const ship13 = document.getElementsByClassName(tile3)
console.log(ship13[0])
ship11[0].classList.add('ship')
ship12[0].classList.add('ship')
ship13[0].classList.add('ship')













// Function to randomly generate a vertical ship [returns an object with the 3 tile codes as strings]
function genVertShip() {
// get tile 1 coordinates
const tile1Y = getNumberAxis(lowBound, limitBound)
const tile1X = getLetterAxis(lowBound, highBound)
// console.log('get letter axis object', tile1X)
const tile1 = String(tile1Y + tile1X.letter)
// with the class selector period
// console.log('tile 1 class code', tile1)
// get tile 2 coordinates
const tile2Y = tile1Y + 1
const tile2 = String(tile2Y + tile1X.letter)
// console.log('tile 2 class code', tile2)
// get tile 3 coordinates
const tile3Y = tile1Y + 2
const tile3 = String(tile3Y + tile1X.letter)
// console.log('tile 2 class code', tile3)
// console.log('vertship class codes', tile1, tile2, tile3)

// returns vertical ship object with classes inside
return {
    tile1: tile1,
    tile2: tile2,
    tile3: tile3
}}
console.log('genvertship', genVertShip())

// Function to randomly generate a horizontal ship [returns an object with the 3 tile codes as strings]
function genHorizShip() {
    // get tile 1 coordinates
    const tile1Y = getNumberAxis(lowBound, highBound)
    const tile1X = getLetterAxis(lowBound, limitBound)
    console.log('get letter axis object', tile1X)
    const tile1 = String(tile1Y + tile1X.letter)
    // with the class selector period
    // console.log('tile 1 class code', tile1)
    // get tile 2 coordinates
    const tile2 = String(tile1Y + tile1X.letter2)
    // console.log('tile 2 class code', tile2)
    // get tile 3 coordinates
    const tile3 = String(tile1Y + tile1X.letter3)
    // console.log('tile 2 class code', tile3)
    console.log('horizship class codes', tile1, tile2, tile3)
    
// returns vertical ship object with classes inside
return {
    tile1: tile1,
    tile2: tile2,
    tile3: tile3
}}
console.log('genhoirzship', genHorizShip())

// Function to apply the class of '.ship' to the elements returned from genVertShip and genHorizShip, it will then be placed with them inside genShip
function shipClassifier() {
    //! TODO this is your initial code to work with ===============================================================================================
    // console.log('getelementbyclassname', document.getElementsByClassName('1A'))
console.log('getelementbyclassname', document.getElementsByClassName(tile1))
const ship11 = document.getElementsByClassName(tile1)
console.log(ship11[0])
const ship12 = document.getElementsByClassName(tile2)
console.log(ship12[0])
const ship13 = document.getElementsByClassName(tile3)
console.log(ship13[0])
ship11[0].classList.add('ship')
ship12[0].classList.add('ship')
ship13[0].classList.add('ship')
}




// Function that randomly picks horizontal or vertical, then generates 3 ship tiles in sequence [returns an object with the 3 tile codes as strings]
function genShip() {
    // Gets random direction for the ship
    let dir = direction()
    console.log(dir)
    // We make every ship go in a positive direction (ships go left to right and top to bottom)
    // if the ship is vertical we limit the upper bound for the first tile, so it can only start from the 7th row, and not lower, but it can be any column
    if(dir === 'vertical') {
    } else {
    // if the ship is horizontal, we limit the upper bound again, so it can only start from the 7th column (G) and not further to the right, but it can be any row
    }
}

// Function that 



















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