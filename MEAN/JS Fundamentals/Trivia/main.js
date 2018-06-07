const easyQ = new Promise((resolve, reject) => {
    $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=boolean&encode=url3986", (res) => {
        console.log(res)
        if (res.response_code == 0) {
            resolve(res.results);
        } else {
            reject(res);
        }

        // let req = {
        //     question: res.results[0].question,
        //     answer: res.results[0].correct_answer
        // };

        // resolve(req);
        // console.log(req);


    });

});

$(document).ready(function() {
    $(".tbox").click(function(e) {


        easyQ.then(function(questions) {
            // console.log(questions)
            delay_html();
            return questions;
        }).then(function(questions) {
            delay_html();
            easyQ.ful
            return questions[0].category;
        }).then(function(category) {
            console.log(category);
        }).catch((reason) => {
            console.log(reason)
            console.log("message")
        }).finally(() => {
            console.log("all done")
        })
    });
});

function delay_html() {
    setTimeout(() => {
        console.log("next")
    }, 10000);
}