// variaveis da bola
let = xB = 400;
let = yB = 200;
let = circ = 20;
let = raio = circ /2

//variaveis de moveBol
let = velxB = 5;
let = velyB = 5;

//varievel raquete
let xR = 5;
let yR = 150;
let comR = 8;
let altR = 100; 

//variavis Op
let xRO = 785
let yRO = 150
let velYOP

// placar
let PP = 0
let PoP = 0

let colisaoR= false;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movebol();
  colisao();
  mostraRaquete1(xR,yR);
  moveRaquete1();
  verifColisaocomRaquet();
  mostraRaquete1(xRO,yRO);
  moveRaquete2();
  verifColisaocomRaquetOP();
  pontos();
  placar();
  bolinhaNaoFicaPresa();
}  

function mostraBolinha(){
  circle(xB, yB, circ)
}

function movebol(){
  xB += velxB;
  yB += velyB;
  
}

function colisao(){
    
  if (xB + raio > width - 3 || xB - raio < 0)
    velxB *= -1;
  
  

  if (yB + raio > height || yB - raio < 0)
    velyB *= -1;
  
}

function mostraRaquete1(xR,yR){
  rect (xR,yR,comR,altR)
}

function mostraRaquete2(){
  rect (xRO,yRO,comR,altR)
  
}

function moveRaquete1(){
  
  if (keyIsDown(UP_ARROW)){
    yR -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yR += 10;
  }
  
}

function verifColisaocomRaquet(){
  if (xB - raio < xR + comR && yB - raio < yR + altR && yB + raio > yR){
    velxB *= -1;
  }
}

function verifColisaocomRaquetOP(){
  if (xB - raio > xRO + comR - 25 && yB - raio < yRO + altR + 5 && yB + raio > yR){
    velxB *= -1;
  }
    
 }
 
  function moveRaquete2(){
      if (keyIsDown(87)){
    yRO -= 10;
  }
  
  if (keyIsDown(83)){
    yRO += 10;
  }
}

function pontos(){  
  if(xB < 10){
    PoP += 1;
  }
    if(xB > 785){
    PP += 1;
  }
}

function placar(){
  stroke(255)
  textAlign(CENTER);
  textSize(20)
  fill(color(255,140,0))
  rect(230,2,40,22);
  fill(255);
  text(PP,250, 20 );
  fill(color(255,140,0))
  rect(530,2,40,22)
  fill(255);
  text(PoP,550, 20 );
  
}

function bolinhaNaoFicaPresa(){
    if (xB - raio < 0){
    xB = 23
    }
}
