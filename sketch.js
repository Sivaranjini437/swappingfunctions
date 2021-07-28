

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the first variable: ');
function setup(){
  var b2 = createButton("click here to Swap");
  b2.position(200,200)
b2.mousePressed(swap)

  }


function draw()
{
}

function swap()
{ 
  [a,b]=[b,a]
  console.log("the new value of a"+a)
  console.log("the new value of b"+b)
}
