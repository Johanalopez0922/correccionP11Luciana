var shipup, shipdown; 
var sea; 
var shipMoving; 

function preload(){   
  sea = loadImage("sea.png"); 
  //Agregar la animación de la siguiente manera 
  shipMoving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png"); 
} 

function setup(){ 
  createCanvas(400,400); 
  ship = createSprite(200,height-30,20,50); 
  // Falta agregar la animación al sprite ship
  
 
  ship.scale = 0.8; 
  // No lo necesitas pero acuerdate que debug nos ayuda a ver el radio de colisión, por defecto es false 
  ship.debug=false; 
  
} 

function draw(){ 
  //Puedes utilizar la imagen para agregarla como background así: 
  background(sea); 
  drawSprites(); 
}
