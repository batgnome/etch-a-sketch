function createCanvas(width = 16){
    if(document.getElementById('container').hasChildNodes){deleteCanvas();}
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
    addMouseEvents();
}

function deleteCanvas() {
     canvas = document.querySelector('div#container');
     while(canvas.hasChildNodes()) {
         canvas.removeChild(canvas.firstChild);
     }
}
function clearBoard() {
    console.log("clear");
    divs = document.querySelectorAll('div.col');
    divs.forEach((e)=>{
        e.setAttribute("style", "background-color: white"); 
    })
}
function addMouseEvents() {
    divs = document.querySelectorAll('div.col');
    divs.forEach( (e)=>{
        e.addEventListener("mouseover", ()=> {
            
            e.setAttribute('style', "background-color: black")
        });
        
    });
}
createCanvas();