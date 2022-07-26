const prompt = require('prompt-sync')();

let n = parseInt(prompt());
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

	cristmasTree[i].tree.x = prompt();
    cristmasTree[i].tree.y = prompt();
    cristmasTree[i].tree.r = prompt();
}
//console.log(cristmasTree)

/*const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}*/


function distance (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
//console.log(distance())