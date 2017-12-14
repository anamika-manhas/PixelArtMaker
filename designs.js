let Height
let Width;
let pixelCanvas;



$("form").submit(function (event){
    $("tr").remove();
    $("td").remove();
    Height = $("#input_height").val();
    Width = $("#input_width").val();
    makeGrid(Height,Width);
    event.preventDefault();
});

pixelCanvas = $("#pixel_canvas");

function makeGrid(row,column) {
    for (let i=0 ; i<row; i++){
        pixelCanvas.append("<tr></tr>");
    }
    for (let j=0 ; j < column ; j++){
        $("tr").append("<td></td>");
    }
}

function choiceColor() {
    return $("#colorPicker").val();
}
function makeColor(tdClick) {
    const color = choiceColor();
    $(tdClick).css("background-color", color);
}
$("table").click(function(event) {
    const target = event.target;
    if (target.tagName != "TD") return;
    makeColor(target);
});
