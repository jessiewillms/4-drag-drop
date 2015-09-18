var app = {

};

var boyName;
var bandName;

app.init = function() {

    // $( ".draggable" ).draggable({
    //   drag: function() {
    //       containmentBy: "window",

    //       $( this )
    //         .addClass( "ui-drag" )
    //         .find( ".help" )
    //           .html( "Trying to help!" );
    //       boyName = $( this ).attr('data-name');
    //       bandName = $( this ).attr('data-band');
    //   }
    // });

    $(".wrap > .draggable")
        .on('mousemove', function() { // Update containment each time it's dragged
            $(this).draggable({

                // grid: [ 5, 5 ],
                snap: '.droppable',
                cursor: "move",
                cursorAt: {
                    top: 56,
                    left: 56
                },
                containment: $('.draggable').parent().parent('main').css('border', '3px solid #778899')

            });
        })


    $(".droppable").droppable({
        drop: handleDropEvent,
        // drop: function(event, ui) {
        //     $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        // disabled: true;

        // };
    });

    function handleDropEvent(event, ui) {  
        $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        var draggable = ui.draggable;
        $(this).html('The square with ID "' + draggable.attr('data-name') + '" was dropped onto me!');
        // ui.draggable.remove();
         disabled: true
        
        //   alert( 'The square with ID "' + draggable.attr('data-name') + '" was dropped onto me!' );
    }
}

$(function() {
    app.init();
});
