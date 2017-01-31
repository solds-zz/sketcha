//default size is 16
var size = 16;

function createGrid(size) {
    var width = 1/size * 500;
    for (var i = 0; i < size; i++) {
        var row = $("<div></div>").addClass("row");
        $("#grid").append(row);
        for (var j = 0; j < size; j++) {
            var square = $("<div></div>").addClass("square");
            $(".row").eq(i).append(square);
        }
    }
    for (var k = 0; k < $(".square").length; k++) {
        $(".square").eq(k).css("width", width + "px");
        $(".square").eq(k).css("height", width + "px");
    }
}

function deleteGrid() {
    $("#grid").empty();
}

function resetGrid() {
    for (var i = 0; i < $(".square").length; i++) {
        $(".square").eq(i).css("background-color", "#fff")
    }
}

$(document).ready(function() {
    createGrid(size);
});

$( "#reset" ).click(function() {
    resetGrid()
});

$( "#resize" ).click(function() {
    var newSize = prompt("Enter the number of squares per row: ");
    if (!isNaN(parseInt(newSize))) {
        size = newSize;
        deleteGrid();
        createGrid(size);
    }
});
