const container = document.getElementById('grid-container');

// make grid
function generateGrid() {
     for (var i=0; i < 256; i++) {
        var gridItem = document.createElement("div");
gridItem.setAttribute('id', 'gridItem');
       container.appendChild(gridItem);
     }
}            