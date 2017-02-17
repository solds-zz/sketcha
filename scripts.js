function createGrid(size) {
    var width = Math.floor(1/size * 500);
    $("#grid").empty();
    for (var i = 0; i < size; i++) {
        var row = $('<div class="row"></div>');
        $("#grid").append(row);
        for (var j = 0; j < size; j++) {
            var square = $('<div class="square"></div>');
            row.append(square);
            square.css("width", width + "px");
            square.css("height", width + "px");
        }
    }
    $(".row").css("max-width", width * size + "px");
    $(".buttons").css("max-width", width * size + "px");
    
    // Darken the square when the mouse enters it
    $(".square").mouseenter(function() {
        var color = $(this).css("background-color");
        if (color === "rgb(255, 255, 255)") {
            $(this).css("background-color", "rgb(128, 128, 128)");
        }
        else if (color === "rgb(128, 128, 128)") {
            $(this).css("background-color", "rgb(64, 64, 64)");
        }
        else {
            $(this).css("background-color", "black")
        }
    });
}

// Main function
$(document).ready(function() {
    var size = 16; // Default grid size is 16 x 16
    createGrid(size);
    $( "#reset" ).click(function() {
        $(".square").css("background-color", "white");
    });
    $( "#resize" ).click(function() {
        var size = prompt("Enter the number of squares per row: ");
        size = Math.abs(size);
        if (!isNaN(parseInt(size))) {
            if (size <= 64) {
                createGrid(size);
            }
            else {
                createGrid(64);
            }
        }
    });
});
