function Ninja(name, age) {
    this.name = name;
    this.age = age;
}

function BlackBelt(name, age) {
    Ninja.call(this, name, age);
    this.belt = 'black';
}

function YellowBelt(name, age) {
    Ninja.apply(this, [name, age]);
    this.belt = 'yellow';
}

var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
// console.log(bB.name);
// console.log(yB.name);


function levelUp() {
    console.log(this.name + ' has learned a new kata, in ' + this.gender + ' favorite language: ' + this.language);
}

var person = {
    name: 'Lisa',
    gender: 'her',
    language: 'JavaScript, duh!'
};
levelUp.call(person);