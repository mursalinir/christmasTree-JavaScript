let input;
const readline = require("readline");
const takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
takeInput.question("", function (answer) {
    input = parseInt(answer)
    takeInput.close();
});

const n = input;
let d;
let max_x = 0;
let min_x = 10000;
let counter = 0;
let max_tree = 0; 

let tree = [];
let cristmasTree = [
    {
        tree:
        {
            x: 0,
            y: 0,
            r: 0
        }
    }
]

/*for(var i=0; i<n; i++) {

	cristmasTree[i].tree.x = prompt();
    cristmasTree[i].tree.y = prompt();
    cristmasTree[i].tree.r = prompt();
}*/

const printMyValue = () => {
    console.log("Hello world, This is your number", number)
}

//console.log(distance())