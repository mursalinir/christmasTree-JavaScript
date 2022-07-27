let number;
let n = 0; // which value will change 
const jira = 4; //which value will not change
const tree = [];
const cristmasTree =[
    { tree:
    { X: 0,
        y: 0,
        r: 0 } }
    ]
let value;
value = {
    x:10,
    y:12,
    r:10
}
let value2 = {
    x:11,
    y:13,
    r:10
}
cristmasTree.push({
    tree:value
});
cristmasTree.push({
    tree:value2
});
console.log(cristmasTree[1].tree.y)



const distance = (x1, y1, x2, y2) =>
{
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
const printMyValue = ()=>{
    console.log("Hello world, This is your number", number)
}
const readline = require("readline");
const takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  takeInput.question("Please enter the number value ", function (answer) {
    number = parseInt(answer)
    takeInput.close();
    //printMyValue()
  });
  printMyValue()