let n;
let d;
let max_x = 0;
let min_x = 10000;
let counter = 0;
let max_tree = 0; 
process.stdin.on('data',function(input)
{
    n=input;
});
//let tree = [];
let cristmasTree = [{
    tree:{
        x:0,
        y:0,
        r:0 
    }
}]

for(var i=0; i<n; i++) {
    takeInput.question("", function (answer) {
        cristmasTree[i].tree.x = parseInt(answer)
        takeInput.close();
      });
    takeInput.question("", function (answer) {
        cristmasTree[i].tree.y = parseInt(answer)
        takeInput.close();
      });
    takeInput.question("", function (answer) {
        cristmasTree[i].tree.r = parseInt(answer)
        takeInput.close();
      });
}
//console.log(cristmasTree)

for( i=min_x; i<=max_x; i++)
{
    counter = 0;
    for( j=0; j<n; j++)
    {
        d = distance(i, 0, tree[j].x, tree[j].y);
        if(d<=tree[j].r)
            counter++;
    }
    if(counter>max_tree)
        max_tree = counter;
}


function showResult()
{
    console.log(max_tree)
}

function distance (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}



/*process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}*/