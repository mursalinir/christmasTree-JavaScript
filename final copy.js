process.stdin.resume();
process.stdin.setEncoding('utf8');
var takeInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let number;
let lines = []
let d;
let max_x = 10000;
let min_x = 0;
let counter = 0;
let max_tree = 0;
let inp;
let y;
let r;
let christmasTree = []
let value = {
    x: 0,
    y: 0,
    r: 0
}
takeInput.question('', function (answer) {
    number = parseInt(answer);
    inputTree(number - 1)
});

function inputTree(n) {
    takeInput.question('', function (a) {
        lines = a;
        inp = lines.split(" ");
        value.x = parseInt(inp[0]);
        value.y = parseInt(inp[1]);
        value.r = parseInt(inp[2]);
        christmasTree.push({ x: value.x, y: value.y, r: value.r });
        //console.log(christmasTree)
        if (n > 0) {
            inputTree(n - 1);
        } else {
            //takeInput.close();
            maxChristmasTree();
        }
    })
}
function maxChristmasTree() {
    for (var i = min_x; i <= max_x; i++) {
        counter = 0;
        for (var j = 0; j < number; j++) {
            d = distance(i, 0, christmasTree[j].x, christmasTree[j].y);
            if (d <= christmasTree[j].r)
                counter++;
        }
        if (counter > max_tree) {
            max_tree = counter;
        }
    }
    /*takeInput.on('close', () => {
        console.log(max_tree);
    });*/
    show();
}
function show() {
    console.log(max_tree)
}
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}