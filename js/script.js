

// create 16x16 grid of divs
const grid = document.querySelector('.grid-container');

for (let i = 0; i < (16); i++){
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.width = '100%';
    row.classList.add(`row-${i}`);
    grid.appendChild(row);
    for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.style.border = '1px solid black';
    cell.style.flex = 1;
    cell.style.height = '30px';
    cell.classList.add(`cell-${(i+1)}-${(j+1)}`);

    cell.addEventListener("mouseover", () => {
        cell.classList.add('hovering');
    })
    cell.addEventListener("mouseout", () => {
        cell.classList.remove('hovering');
    })

    row.appendChild(cell);
    }   
}