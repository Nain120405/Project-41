var batman, batmanImg;
var thunderbolt,thunderboltImg;
var maxDrop = 100;


function preload(){
    thunderboltImg = loadAnimation("images/1.png,images/2.png,images/3.png,images/4.png");
    batmanImg = loadAnimation("images/walking_1.png,images/walking_2.png,images/walking_3.png,images/walking_4.png,images/walking_5.png,images/walking_6.png,images//walking_7.png,images/walking_8.png")
    
}

function setup(){
    createCanvas(400, 600);

    batman = createSprite(200,200,20,20);
    batman = addAnimation(batmanImg);

   
   
    
}

function draw(){
    background("black");

    for(var i = 0; i<maxDrop; i++){
        drops.push(new Drops(random(0,400),random(0,400)))
    }

    
    
}   

