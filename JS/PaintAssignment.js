var colorPicked = 0;
var columnDiv = 0;

    var colorHolder = document.createElement("DIV");
    colorHolder.className = "color-menu";
    colorHolder.setAttribute("id", "color-holder");
    document.body.appendChild(colorHolder);

    var colorCanvas = document.createElement("DIV");
    colorCanvas.className = "canvas";
    colorCanvas.id ="color-canvas";
    document.body.appendChild(colorCanvas);

    var arr = ["red", "orange", "yellow", "green", "blue", "purple"];

    for (var i = 0; i < arr.length; i++) {

        var colorSquare = document.createElement("DIV");
        colorSquare.className = "colorClass";

        colorSquare.id = arr[i];

        colorSquare.style.backgroundColor = arr[i];
        colorHolder.appendChild(colorSquare);

        colorSquare.addEventListener("click", selectColor);
    }

function drawColor(){
    for (var h = 0; h < 60; h++){
        var rowDiv = document.createElement("DIV");
        rowDiv.className = "rowClass";

            for (var j=0; j<60; j++){
                columnDiv = document.createElement("DIV");
                columnDiv.className = "columnClass";
                columnDiv.addEventListener("mouseover", colorBoxes);
                rowDiv.appendChild(columnDiv);
        }
        colorCanvas.appendChild(rowDiv);
    }

}
drawColor();

function selectColor(e) {
    colorPicked = e.target.id;
}

function colorBoxes(e){
    e.target.style.backgroundColor = colorPicked;
}