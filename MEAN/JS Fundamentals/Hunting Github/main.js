// $.get("https://api.github.com/users/jerrycomortiz457", (res) => {
//     var name = res.name;
// });
const displayName = new Promise((resolve, reject) => {
    $.get("https://api.github.com/users/jerrycomortiz457", (res) => {
        let name = res.name;
        resolve(name);
    });
});
$(document).on("click", "button", () => {
    displayName.then((got_name) => {
        $('h1').text(got_name);
    })
});