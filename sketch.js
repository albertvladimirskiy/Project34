var dog, happyDog,database, foodS, foodStock;
var dogi, hdogi;

function preload()
{
  dogi = loadImage("images/dogImg.png");
  hdogi = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  database=firebase.database();

  dog = createSprite(250,250,10,10);
  dog.addImage(dogi);
  dog.scale=0.2;

  foodStock=database.ref('Food');
    foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hdogi);
  }

  drawSprites();
  

  fill("white");

  text("Food left: "+ foodS, 200,150)
  text("Press the Up Arrow Key to Feed the Dog",160,50);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } else {
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
  }




