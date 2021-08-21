grid = document.createElement("div");
grid.textContent = " this is the start";

document.body.appendChild(grid);

for(var i = 0; i <16; i++) {
        row = document.createElement("div");
        row.setAttribute("id", "row")
        document.getElementById("container").appendChild(row);
    for(var j = 0; j <16; j++) {
        col = document.createElement("div");
        col.setAttribute("id", "col")
        row.appendChild(col);
    }
}