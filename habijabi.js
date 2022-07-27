process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
  f();
});
function f()
{
    reader.on('close', () => {
        console.log(lines[0]);
        reader.close();
      });
}
