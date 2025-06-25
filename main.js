const root = document.getElementById('root');
const ctx = root.getContext('2d');
const playerW = 20;
const playerH = 100;
const fps = 1000/50;

const playerA = {
    name:"Player A",
    x: 0,
    y: (root.height/2) - playerH/2,
    height:playerH,
    width:playerW,
    score: 0,
    color: "white"
}

const playerB = {
    name:"Player B",
    x: root.width - playerW,
    y: (root.height/2) - playerH/2,
    height:playerH,
    width:playerW,
    score: 0,
    color: "white"
}


const ball = {
    x: root.width/2,
    y: root.height/2,
    radius: 10,
    color: "white",
    speed: 5,
    velocityX: 5,
    velocityY: 5
  
}

const net = {
    x: (root.width/2 - 2/2),
    y: 0,
    width: 2,
    height: 10,
    color: "white"
}

function drawRect(x,y,width,height,color){
  ctx.fillStyle = color;
  ctx.fillRect(x,y,width,height);
}

function drawBall(x,y,radius,color){
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x,y,radius,0,2*Math.PI);
  ctx.closePath();
  ctx.fill(); 
}

function drawText(x,y,text,color){
  ctx.fillStyle = color;
  ctx.font = "50px Poppins";
  ctx.fillText(text,x,y);
}

function drawNet(net){
     for(i = 0; i < root.height;i+=15){
         drawRect(net.x,net.y + i,net.width,net.height,net.color);
     }
}


function render(){
    drawRect(0,0,root.width,root.height,"BLACK");
    drawText(root.width/4,root.height/7,playerA.score,playerA.color);
    drawText(3*root.width/4,root.height/7,playerB.score,playerB.color);
    drawNet(net);
    drawRect(playerA.x,playerA.y,playerA.width,playerA.height,playerA.color);
    drawRect(playerB.x,playerB.y,playerB.width,playerB.height,playerB.color);
    drawBall(ball.x,ball.y,ball.radius,ball.color);
}

function update(){
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if(ball.y+ball.radius < 0 || ball.y+ball.radius > root.height){
        ball.velocityY = -ball.velocityY;
    }

}

function game(){
    update();
    render();
}

setInterval(game,fps);
