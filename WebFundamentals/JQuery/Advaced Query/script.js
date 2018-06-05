function attach_handlers() {
    $('.alert').click(function() {
        alert('you clicked me!');
    });
}

$(document).ready(function() {

    attach_handlers();

    $('.new_btn').click(function() {
        $('#buttons').append("<button class='alert'>I am a dynamically generated button!</button>");
        attach_handlers();
    });

    //A callback is nothing more than calling a function at some time from within another function**


});