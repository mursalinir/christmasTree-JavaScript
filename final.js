const readline = require("readline");
const takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let number
let d;
let max_x = 0;
let min_x = 10000;
let counter = 0;
let max_tree = 0;
let x;
let y;
let r;
const tree = [];
let christmasTree = []
let value = {
    x: 0,
    y: 0,
    r: 0
}
takeInput.question("enter n: ", function (answer) {
    number = parseInt(answer);
    inputTree(number - 1)
});
function inputTree(n) {
    takeInput.question('Please input x: ', (x) => {
        value.x = parseInt(x);
        takeInput.question('Please input y: ', (y) => {
            value.y = parseInt(y);
            takeInput.question('Please input r: ', (r) => {
                value.r = parseInt(r);
                christmasTree.push({x: value.x, y: value.y, r: value.r});
                if (n > 0) {
                    inputTree(n - 1);
                } else {
                    takeInput.close();
                }
            })
        })
    });
    //treeDekhao();
}

function dekhao(n) {
    console.log(n)
}
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
//console.log(distance())
christmasTree.map(tree =>{
    console.log(tree.x)
})