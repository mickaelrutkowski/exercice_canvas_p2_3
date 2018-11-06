var canvas = document.getElementById("canvas1");
if (canvas.getContext)
{
  context = canvas.getContext('2d');
}
function drawCurve()
{
  context.beginPath();
  context.fillStyle="RGB( 185, 119, 14 )";
  context.moveTo(80,140);
  context.quadraticCurveTo(15, 115, 80, 100);
  context.fill();

  context.beginPath();
  context.fillStyle="RGB( 185, 119, 14 )";
  context.moveTo(320,140);
  context.quadraticCurveTo(390,120, 320, 100);
  context.fill();

  context.beginPath();
  context.fillStyle="RGB( 185, 119, 14 )";
  context.moveTo(150,330);
  context.quadraticCurveTo(170, 370, 190, 330);
  context.fill();

  context.beginPath();
  context.fillStyle="RGB( 185, 119, 14 )";
  context.moveTo(210,330);
  context.quadraticCurveTo(230,370, 250, 330);
  context.fill();

  context.beginPath();
  context.strokeStyle="RGB( 185, 119, 14 )";
  context.lineWidth=4;
  context.moveTo(190,270);
  context.quadraticCurveTo(200,230, 210, 270);
  context.stroke();
}
drawCurve();
function rectangle()
{
  var canvas1 = document.getElementById("canvas1");
  var ctx1 = canvas1.getContext("2d");
  ctx1.beginPath();
    ctx1.fillStyle="RGB( 108, 52, 131 )";
  ctx1.lineWidth="2";
  ctx1.arc(200, 210, 10, 0, 2 * Math.PI);

  ctx1.fill();

  // ctx1.globalCompositeOperation = "destination-over";
  ctx1.beginPath();
  ctx1.lineWidth="2";
  ctx1.arc(200, 170, 10, 0, 2 * Math.PI);
  ctx1.fillStyle="RGB( 108, 52, 131 )";
  ctx1.fill();

  ctx1.globalCompositeOperation = "destination-over";
  ctx1.beginPath();
  ctx1.rect(190,250,20,80);
  ctx1.strokeStyle="blue";
  ctx1.lineWidth="2";
  ctx1.fillStyle="white";
  ctx1.fill();

  // ctx1.globalCompositeOperation = "destination-over";
  ctx1.beginPath();
  ctx1.rect(150,100,100,230);
  ctx1.strokeStyle="blue";
  ctx1.lineWidth="2";
  ctx1.fillStyle="RGB( 185, 119, 14 )";
  ctx1.fill();

  ctx1.beginPath();
  ctx1.rect(80,100,240,40);
  ctx1.strokeStyle="blue";
  ctx1.lineWidth="2";
  ctx1.fillStyle="RGB( 185, 119, 14 )";
  ctx1.fill();

  // ctx1.globalCompositeOperation = "destination-over";
  ctx1.beginPath();
  ctx1.lineWidth="2";
  ctx1.arc(215, 70, 10, 0, 2 * Math.PI);
  ctx1.fillStyle= "white";
  ctx1.strokeStyle="black";
  // ctx1.stroke();
  ctx1.fill();

  // ctx1.globalCompositeOperation = "destination-over";
  ctx1.beginPath();
  ctx1.lineWidth="2";
  ctx1.arc(185, 70, 10, 0, 2 * Math.PI);
  ctx1.fillStyle= "white";
  ctx1.fill();

  // ctx1.globalCompositeOperation = "destination-over";


  ctx1.globalCompositeOperation = "destination-over";
  ctx1.beginPath();
  ctx1.lineWidth="2";
  ctx1.arc(200, 75, 45, 0, 2 * Math.PI);
  ctx1.fillStyle= "RGB( 185, 119, 14 )";
  ctx1.fill();
}

window.onload=rectangle;
