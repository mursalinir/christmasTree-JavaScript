let input;
const readline = require("readline");
const takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const n = dataInput();
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

for(var i=0; i<n; i++) {

	cristmasTree[i].tree.x = dataInput();
    cristmasTree[i].tree.y = dataInput();
    cristmasTree[i].tree.r = dataInput();
}
console.log(cristmasTree)
const printMyValue = () => {
    console.log("Hello world, This is your number", number)
}

/*const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}*/
function dataInput(){
    takeInput.question("", function (answer) {
        input = parseInt(answer)
        takeInput.close();        
    });
    return input;
}

function distance (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
//console.log(distance())