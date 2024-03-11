const container = document.querySelector('.container');
const createGrid = (amtOfGrids) => {
    for ( i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div')
        row.setAttribute("class", "grid-row")
        
        for (j = 0; j < amtOfGrids; j++) {
           const gridBox = document.createElement('div')
           gridBox.setAttribute("class", "grid-box") 
           gridBox.addEventListener('mouseenter', () =>{
            gridBox.style.backgroundColor = 'black'
           })
           row.appendChild(gridBox)
           
        }
        container.appendChild(row)
    }
}
createGrid(16);

