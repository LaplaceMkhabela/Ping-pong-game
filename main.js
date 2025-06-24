const root = document.getElementById('root');
const ctx = root.getContext('2d');
const w = 600;
const h = 400;
const playerW = 20;
const playerH = 100;

const playerA = {
    name:"Player A",
    x: 0,
    y: (height/2) - playerH/2,
    score: 0,
    color: "white"
}

const playerB = {
    name:"Player B",
    x: w - playerW,
    y: (height/2) - playerH/2,
    score: 0,
    color: "white"
}

const ball = {
  
}

function drawPlayer(x,y,width,height,color){
  ctx.fillStyle = color;
  ctx.fillRect(x,y,width,height)
}

function drawNet(x,y,width,height,color){
  ctx.fillStyle = color;
  ctx.fillRect(x,y,width,height);
}

function drawBall(x,y,radius,color){
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x,y,radius,0,2*Math.PI);
  ctx.ClosePath();
}

function drawText(x,y,text,color){
  ctx.fillStyle = color;
  ctx.font = "20px Poppins";
  ctx.fillText(text,x,y);
}
