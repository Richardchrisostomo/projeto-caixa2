var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui
som=loadSound("music.mp3");
    



}

function setup(){
    tela = createCanvas(800,600);

    

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(500,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(790,580,360,30);
    bloco4.shapeColor = "green";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX=4;
    bola.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        som.play();
    }


    if(bloco2.isTouching(bola)&& bola.bounceOff(bloco2 )){
        bola.shapeColor = "orange";
        som.play();
    }
        //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola)&& bola.bounceOff(bloco3 )){
        bola.shapeColor = "red";
        som.play();
    }
      //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola)&& bola.bounceOff(bloco4 )){
        bola.shapeColor = "green";
        som.play();
    }
       
       //escreva o código para definir velocityX e velocityY da bola como 0

        //escreva o código para parar a música
    
    

    

    drawSprites();
}