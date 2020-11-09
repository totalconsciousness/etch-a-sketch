// -----SELECTORS-----
const game = document.querySelector('.game');
const button = document.querySelector('.button');
let boardDimension, gridItems;

// -----FUNCTIONS-----
// generate grid item and add to grid
function generateGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridContainer.appendChild(gridItem);
}
// generate entire grid (16x16 = 256 grid items)
function generateBoard() {
    boardDimension = prompt('How many squares do you want per side on your next grid?');

    gridContainer.style.gridTemplateColumns = `repeat(${boardDimension}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${boardDimension}, auto)`;
    gridContainer.style.display = 'inline-grid';

    for (let i = 0; i < (Math.pow(boardDimension, 2)); i++) {
        generateGridItem();
    }

    // obtain nodelist of all grid items
    gridItems = document.querySelectorAll('.gridItem');

    // add event listener to each grid item
    for (let i = 0; i < (Math.pow(boardDimension, 2)); i++) {
        gridItems[i].addEventListener('mouseover', () => {
            gridItems[i].classList.add('activated');
        });
    }
}
// clear board
function clearBoard() {
    for (let i = 0; i < (Math.pow(boardDimension, 2)); i++) {
        gridItems[i].classList.remove('activated');
        gridContainer.removeChild(gridItems[i]);
        gridContainer.style.display = 'none';
    }
    boardDimension = 0;

}

// -----FLOW-----
// create grid div
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

// add grid to game
game.appendChild(gridContainer);

// generate board
generateBoard();

// button behavior
button.addEventListener('click', () => {
    clearBoard();
    setTimeout(function() {
        generateBoard();
    }, 1000);
})
