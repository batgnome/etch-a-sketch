function createCanvas(width = 16){
  
    document.getElementById('container').setAttribute(
        'style', 
            `width: ${(width*16)}px;
             height: ${(width*16)}px;`
    ); 
    for(var i = 0; i < width; i++) {
        row = document.createElement("div");
        row.setAttribute("id", "row");
        document.getElementById("container").appendChild(row);
        
        for(var j = 0; j < width; j++) {
            col = document.createElement("div");
            col.setAttribute("id", i+j);
            col.setAttribute("class", "col");
            row.appendChild(col);
        }
    }
}

function deleteCanvas() {

}
function clearBoard() {
    console.log("clear");
    divs = document.querySelectorAll('div.col');
    divs.forEach((e)=>{
        e.setAttribute("style", "background-color: white"); 
    })
}
createCanvas(32);
divs = document.querySelectorAll('div.col');
divs.forEach( (e)=>{
    e.addEventListener("mouseover", ()=> {
        
        e.setAttribute('style', "background-color: black")
    });
        
});