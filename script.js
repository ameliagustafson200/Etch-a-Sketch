const container = document.getElementById('grid-container');
const gridItems = document.getElementsByClassName('gridItem');
// make grid
function generateGrid() {
     for (var i=0; i < 257; i++) {
        var gridItem = document.createElement("div");
gridItem.setAttribute('class', 'gridItem');
gridItem.setAttribute('id', 'gridItem');
       container.appendChild(gridItem);
       
     }
} 

