// DOM Selectors

const grid = document.querySelector('.grid-container');

let currentGridSize;

let gridButton = document.querySelector('.js-size-btn');
let clearButton = document.querySelector('.js-clear-btn');

createGrid();

// button eventListeners
gridButton.addEventListener('click', () => {
    let size = prompt("Enter desired grid size", "Size (e.g. '16')");
    size;
    grid.innerHTML = '';
    createGrid(size);
})

clearButton.addEventListener('click', () => {
    clearGrid(currentGridSize);
})

// generate grid of custom length
function createGrid(size = 16) {
    for (let i = 0; i < (size); i++){
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.width = '100%';
        row.classList.add(`row-${i}`);
        grid.appendChild(row);
        for (let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.style.border = '1px solid black';
        cell.style.flex = 1;
        cell.style.height = `${400/size}px`;
        cell.classList.add(`cell-${(i+1)}-${(j+1)}`);
    
        cell.addEventListener("mouseover", () => {
            cell.classList.add('hovering');
        })
        cell.addEventListener("mouseout", () => {
            cell.classList.remove('hovering');
        })
        cell.addEventListener("click", () => {
            cell.classList.add('selected');
        })
        row.appendChild(cell);
        }   
    }
    currentGridSize = size;
}

// clear grid by looping through cells, removing selected class
function clearGrid(size){
    for (let i = 0; i < (size); i++){
        for (let j = 0; j < size; j++) {
            if (document.querySelector(`.cell-${(i+1)}-${(j+1)}`).classList.contains('selected')) {
                document.querySelector(`.cell-${(i+1)}-${(j+1)}`).classList.remove('selected');
            }
        }
    }
}
