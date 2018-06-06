$(document).ready(function() {
    // our test object
    var customObject = {
        name: 'California, Eureka',
        onClick: function(myParam, arr) {
            console.log('clicked');
            console.log(myParam, 'passed by bind');
            console.log(this.name);
            console.log(arr);
        }
    }

    var newObject = {
            name: "West Virginia,  Montani semper liberi",
            age: 31
        }
        // our behavior on click.
        // $('button').click(customObject.onClick.bind(newObject));
    $('button[name=button]').click(customObject.onClick.bind(newObject, "Bind this argument!", [1, 2]));
    $('button[name=button2]').click(customObject.onClick.bind(customObject));


});