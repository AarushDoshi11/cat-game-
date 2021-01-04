var garden,gardenImage;
function preload() {
    gardenImage = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(50,315,20,20);
 
  

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
