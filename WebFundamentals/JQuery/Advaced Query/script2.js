$(document).ready(function() {
    $('button').click(function() {
        $('div').append('<h3>I am new content</h3>');
    });
    $('div.a, div.b').on('mouseover', 'h3', function() {
        $(this).css('color', 'pink');
    });
});