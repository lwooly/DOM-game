
export const createGridSquareHTML = ({_id, isShip, selected}) => {

    //create standard grid square
    const gridSquare = document.createElement('div')
    gridSquare.className = 'grid-square'
    gridSquare.dataset.id = _id

    // change visual based on grid square data
    if (isShip) {
        gridSquare.classList.add('ship')
    }

    if (selected) {
        gridSquare.classList.add('selected')
    }

    return gridSquare
}