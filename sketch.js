
var back, backImg;
var banker ,bankerImg ,player;
var no_deal, deal, phone, col;
var no_dealImg, dealImg, phoneImg, colImg;
var song, callRing;
var suitcaseSelected=false;
var selectedSuitcase=0;
var openedSuitcases="";
var shuffledAmountsArray = [];
var arr = [
  1,
  10,
  50,
  100,
  500,
  750,
  1000,
  5000,
  7000,
  10000,
  15000,
  20000

];

function preload(){
selectedSuitcase=loadImage("selected.jpg");
openedSuitcase = loadImage("box_open.png")
unOpenedSuitcase = loadImage("box_close.png");
amtBox=loadImage("col.png");
backImg = loadImage("back_4.jpg")
phoneImg = loadImage("phone.png")
no_dealImg = loadImage("no_deal.png")
dealImg = loadImage("deal.png")
//box2Img = loadImage("box_close.png")
//colImg = loadImage("col.png")
bankerImg = loadImage("banker.png")
song = loadSound("backmusic.mp3")
}

function setup() {
  createCanvas(1500,720);

  form = new Form()
  shuffledAmountsArray = shuffle(arr); 
  console.log(arr);
  console.log(shuffledAmountsArray);
  console.log(openedSuitcases);
  b1 = createSprite(400,100,10,10)
  b1.addImage(unOpenedSuitcase);
  b1.scale=0.2;
  b2 = createSprite(600,100,10,10)
  b2.addImage(unOpenedSuitcase);
  b2.scale=0.2;
  b3 = createSprite(800,100,10,10)
  b3.addImage(unOpenedSuitcase);
  b3.scale=0.2;
  b4 = createSprite(1000,100,10,10)
  b4.addImage(unOpenedSuitcase);
  b4.scale=0.2;
  b5 = createSprite(400,300,10,10)
  b5.addImage(unOpenedSuitcase);
  b5.scale=0.2;
  b6 = createSprite(600,300,10,10)
  b6.addImage(unOpenedSuitcase);
  b6.scale=0.2;
  b7 = createSprite(800,300,10,10)
  b7.addImage(unOpenedSuitcase);
  b7.scale=0.2;
  b8 = createSprite(1000,300,10,10)
  b8.addImage(unOpenedSuitcase);
  b8.scale=0.2;
  b9 = createSprite(400,500,10,10)
  b9.addImage(unOpenedSuitcase);
  b9.scale=0.2;
  b10 = createSprite(600,500,10,10)
  b10.addImage(unOpenedSuitcase);
  b10.scale=0.2;
  b11 = createSprite(800,500,10,10)
  b11.addImage(unOpenedSuitcase);
  b11.scale=0.2;
  b12 = createSprite(1000,500,10,10)
  b12.addImage(unOpenedSuitcase);
  b12.scale=0.2;

  col1 = createSprite(1300,100,10,10,0)
  col1.addImage(amtBox);
  col1.scale=0.5;

  col2 = createSprite(1300,200,10,10,1)
  col2.addImage(amtBox);
  col2.scale=0.5;
  col3 = createSprite(1300,300,10,10,2)
  col3.addImage(amtBox);
  col3.scale=0.5;
  col4 = createSprite(1300,400,10,10,3)
  col4.addImage(amtBox);
  col4.scale=0.5;
  col5 = createSprite(1300,500,10,10,4)
  col5.addImage(amtBox);
  col5.scale=0.5;
  col6 = createSprite(1300,600,10,10,5)
  col6.addImage(amtBox);
  col6.scale=0.5;
  col7 = createSprite(150,100,10,10,6)
  col7.addImage(amtBox);
  col7.scale=0.5;
  col8 = createSprite(150,200,10,10,7)
  col8.addImage(amtBox);
  col8.scale=0.5;
  col9 = createSprite(150,300,10,10,8)
  col9.addImage(amtBox);
  col9.scale=0.5;
  col10 = createSprite(150,400,10,10,9)
  col10.addImage(amtBox);
  col10.scale=0.5;
  col11 = createSprite(150,500,10,10,10)
  col11.addImage(amtBox);
  col11.scale=0.5;
  col12 = createSprite(150,600,10,10,11)
  col12.addImage(amtBox);
  col12.scale=0.5; 
  
 
//song.play();

  
}

function draw() {
 
 // form.display();
  background(backImg);  
   

  
  drawSprites();

  stroke("black")
  textSize(15)
  fill("white")
  text("MY CASE :",width/2,height-40)

  textSize(30);
  fill("black")
  if (openedSuitcases.includes(",1,")) {
    text(shuffledAmountsArray[0], b1.x, b1.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]), false);
  } else {
    text("1",b1.x,b1.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]), true);
  }
  if (openedSuitcases.includes(",2,")) {
    text(shuffledAmountsArray[1], b2.x, b2.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[1]), false);
  } else {
    text("2",b2.x,b2.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[1]), true);
  }
  if (openedSuitcases.includes(",3,")) {
    text(shuffledAmountsArray[2], b3.x, b3.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[2]), false);
  } else {
    text("3",b3.x,b3.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[2]), true);
  }
  if (openedSuitcases.includes(",4,")) {
    text(shuffledAmountsArray[3], b4.x, b4.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[3]), false);
  } else {
    text("4",b4.x,b4.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[3]), true);
  }
  if (openedSuitcases.includes(",5,")) {
    text(shuffledAmountsArray[4], b5.x, b5.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[4]), false);
  } else {
    text("5",b5.x,b5.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[4]), true);
  }
  if (openedSuitcases.includes(",6,")) {
    text(shuffledAmountsArray[5], b6.x, b6.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[5]), false);
  } else {
    text("6",b6.x,b6.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[5]), true);
  }  if (openedSuitcases.includes(",7,")) {
    text(shuffledAmountsArray[6], b7.x, b7.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[6]), false);
  } else {
    text("7",b7.x,b7.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[6]), true);
  }  if (openedSuitcases.includes(",8,")) {
    text(shuffledAmountsArray[7], b8.x, b8.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[7]), false);
  } else {
    text("8",b8.x,b8.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[7]), true);
  }  if (openedSuitcases.includes(",9,")) {
    text(shuffledAmountsArray[8], b9.x, b9.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[8]), false);
  } else {
    text("9",b9.x,b9.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[8]), true);
  }  if (openedSuitcases.includes(",10,")) {
    text(shuffledAmountsArray[9], b10.x, b10.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[9]), false);
  } else {
    text("10",b10.x,b10.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[9]), true);
  }  if (openedSuitcases.includes(",11,")) {
    text(shuffledAmountsArray[10], b11.x, b11.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[10]), false);
  } else {
    text("11",b11.x,b11.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[10]), true);
  }  if (openedSuitcases.includes(",12,")) {
    text(shuffledAmountsArray[11], b12.x, b12.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[11]), false);
  } else {
    text("12",b12.x,b12.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[11]), true);
  }  
  if (suitcaseSelected === false) { //This will happen only once at the beginning
    if (mousePressedOver(b1)) {
        text("1",width/2+60,height-40) // no next to My Case
        b1.addImage(selectedSuitcase); 
        suitcaseSelected=true;
        selectedSuitcase=1;
    } else if (mousePressedOver(b2)) {
      text("2",width/2+60,height-40)
      b2.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=2;
    } else if (mousePressedOver(b3)) {
      text("3",width/2+60,height-40)
      b3.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=3;
    } else if (mousePressedOver(b4)) {
      text("4",width/2+60,height-40)
      b4.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=4;
    } else if (mousePressedOver(b5)) {
      text("5",width/2+60,height-40)
      b5.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=5;
    } else if (mousePressedOver(b6)) {
      text("6",width/2+60,height-40)
      b6.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=6;
    } else if (mousePressedOver(b7)) {
      text("7",width/2+60,height-40)
      b7.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=7;
    } else if (mousePressedOver(b8)) {
      text("8",width/2+60,height-40)
      b8.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=8;
    } else if (mousePressedOver(b9)) {
      text("9",width/2+60,height-40)
      b9.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=9;
    } else if (mousePressedOver(b10)) {
      text("10",width/2+60,height-40)
      b10.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=10;
    } else if (mousePressedOver(b11)) {
      text("11",width/2+60,height-40)
      b11.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=11;
    } else if (mousePressedOver(b12)) {
      text("12",width/2+60,height-40)
      b12.addImage(selectedSuitcase);
      suitcaseSelected=true;
      selectedSuitcase=12;
    } 
  } else { 
    if (mousePressedOver(b1)&&(selectedSuitcase!=1)&&!openedSuitcases.includes(",1,")) {
        b1.addImage(openedSuitcase);
        openedSuitcases=openedSuitcases+",1,";
        text(shuffledAmountsArray[0], b1.x, b1.y);
    } else if (mousePressedOver(b2)&&(selectedSuitcase!=2)&&!openedSuitcases.includes(",2,")) {
      b2.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",2,";
      text(shuffledAmountsArray[1], b2.x, b2.y);
    } else if (mousePressedOver(b3)&&(selectedSuitcase!=3)&&!openedSuitcases.includes(",3,")) {
      b3.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",3,";
      text(shuffledAmountsArray[2], b3.x, b3.y);
    } else if (mousePressedOver(b4)&&(selectedSuitcase!=4)&&!openedSuitcases.includes(",4,")) {
      b4.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",4,";
      text(shuffledAmountsArray[3], b4.x, b4.y);
    } else if (mousePressedOver(b5)&&(selectedSuitcase!=5)&&!openedSuitcases.includes(",5,")) {
      b5.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",5,";
      text(shuffledAmountsArray[4], b5.x, b5.y);
    } else if (mousePressedOver(b6)&&(selectedSuitcase!=6)&&!openedSuitcases.includes(",6,")) {
      b6.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",6,";
      text(shuffledAmountsArray[5], b6.x, b6.y);
    } else if (mousePressedOver(b7)&&(selectedSuitcase!=7)&&!openedSuitcases.includes(",7,")) {
      b7.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",7,";
      text(shuffledAmountsArray[6], b7.x, b7.y);
    } else if (mousePressedOver(b8)&&(selectedSuitcase!=8)&&!openedSuitcases.includes(",8,")) {
      b8.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",8,";
      text(shuffledAmountsArray[7], b8.x, b8.y);
    } else if (mousePressedOver(b9)&&(selectedSuitcase!=9)&&!openedSuitcases.includes(",9,")) {
      b9.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",9,";
      text(shuffledAmountsArray[8], b9.x, b9.y);
    } else if (mousePressedOver(b10)&&(selectedSuitcase!=10)&&!openedSuitcases.includes(",10,")) {
      b10.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",10,";
      text(shuffledAmountsArray[9], b10.x, b10.y);
    } else if (mousePressedOver(b11)&&(selectedSuitcase!=11)&&!openedSuitcases.includes(",11,")) {
      b11.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",11,";
      text(shuffledAmountsArray[10], b11.x, b11.y);
    } else if (mousePressedOver(b12)&&(selectedSuitcase!=12)&&!openedSuitcases.includes(",12,")) {
      b12.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",12,";
      text(shuffledAmountsArray[11], b12.x, b12.y);
    } 
    
}

}


function makeColInvisible (index, visible) {
  switch(index) {
    case 0: col1.visible=visible; if (visible) text(arr[index], col1.x, col1.y); break;
    case 1: col2.visible=visible; if (visible) text(arr[index], col2.x, col2.y); break;
    case 2: col3.visible=visible; if (visible) text(arr[index], col3.x, col3.y); break;
    case 3: col4.visible=visible; if (visible) text(arr[index], col4.x, col4.y); break;
    case 4: col5.visible=visible; if (visible) text(arr[index], col5.x, col5.y); break;
    case 5: col6.visible=visible; if (visible) text(arr[index], col6.x, col6.y); break;
    case 6: col7.visible=visible; if (visible) text(arr[index], col7.x, col7.y); break;
    case 7: col8.visible=visible; if (visible) text(arr[index], col8.x, col8.y); break;
    case 8: col9.visible=visible; if (visible) text(arr[index], col9.x, col9.y); break;
    case 9: col10.visible=visible; if (visible) text(arr[index], col10.x, col10.y); break;
    case 10: col11.visible=visible; if (visible) text(arr[index], col11.x, col11.y); break;
    case 11: col12.visible=visible; if (visible) text(arr[index], col12.x, col12.y); break;
  } 
}