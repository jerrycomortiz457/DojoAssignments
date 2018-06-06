const displayMyName = new Promise((resolve, reject) => {
    resolve($.get("https://api.github.com/users/jerrycomortiz457", (res) => {
        let name = res.name;
    }));
});
$(document).on("click", "button", () => {
    displayMyName.then($('h1').text(name));
});