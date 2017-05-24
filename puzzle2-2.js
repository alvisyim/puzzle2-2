var upID;
var page = 1; 
var mapLX = 600;
var mapLY = 70;
var mapLFX = 20;
var mapLFY = 540;
var mapLID;
var mapLSizeX = 100;
var mapLSizeY = 60;
var stateOfMapL = 1;
var lock = false;

function preload () {
  bg01 = loadImage("https://dl.dropboxusercontent.com/s/opiw7q1a5iy4g66/pg01.JPG");
  mapL = loadImage("https://dl.dropboxusercontent.com/s/1fudi2at22kiav7/1_LI.jpg");
  up = loadImage("https://dl.dropboxusercontent.com/s/nahae8egan2seux/up.png");
  down = loadImage("https://dl.dropboxusercontent.com/s/m5ukbloh426k66f/down.png");
  left = loadImage("https://dl.dropboxusercontent.com/s/6k19qdmedmrfujc/left.png");
  right = loadImage("https://dl.dropboxusercontent.com/s/7y0xym3zxtpz3h0/right.png");
}

function setup () {
  textAlign(CENTER);
  noStroke();
  
  if (stateOfMapL > 6) {
    stateOfMapL = 3; 
  }
}

function draw () {
  createCanvas(800,600);
  background(220);
  ID ();
  
  if (page == 1) {
    page01();
  }
  else if (page == 2) {
    page02();
  }
  
  test ();
}

function page01 () {
  image(bg01,0,0,width, height);
  nav ();
  
  if(upID < 40 && lock == false && (stateOfMapL == 1 || stateOfMapL == 5) ) {
    fill(240);
      ellipse(width/2,40,80,80);
      if (mouseIsPressed == true) {
        page = 2;
      }
    }
  image(mapL,mapLX,mapLY, mapLSizeX,mapLSizeY);
      
   
    
    
  image(up, (width/2)-40, 0, 80, 80);
  //image(left,0, (height/2)-40, 80, 80);
  //image(right, 720, (height/2)-40, 80, 80);
  //image(down,(width/2)-40, 520, 80, 80); 
}

function page02 () {
  
    if(downID < 40  && lock == false && (stateOfMapL == 1 || stateOfMapL == 5)) {
      fill(240);
      ellipse(width/2,560,80,80);
        if (mouseIsPressed == true) {
        page = 1;
      }
    }
    nav();
  //image(up, (width/2)-40, 0, 80, 80);
  //image(left,0, (height/2)-40, 80, 80);
  //image(right, 720, (height/2)-40, 80, 80);
  image(down,(width/2)-40, 520, 80, 80);
}

function nav () {
  
   
  fill(150);
  rect(0, 500, 200, 100, 3);
  fill(100);
  rect(10, 510, 80, 80);
  rect(110,510,80,80);
  
  if(stateOfMapL == 1) {
  }else if(stateOfMapL == 2) {
    mapLX = mapLX - 10;
    mapLY = mapLY - 10;
    mapLSizeX = mapLSizeX + 5;
    mapLSizeY = mapLSizeY + 5;
    if (mapLX < 80) {
      mapLX = 80;
    }
    if(mapLY < 100) {
      mapLY = 100;
    }
    if (mapLSizeX > 640) {
      mapLSizeX = 640;
    }
    if(mapLSizeY > 400) {
      mapLSizeY = 400;
    }
  }else if(stateOfMapL == 4) {
  image(mapL,mapLX,mapLY, mapLSizeX,mapLSizeY);
      
    mapLX = mapLX - 10;
    mapLY = mapLY + 10;
    mapLSizeX = mapLSizeX - 5;
    mapLSizeY = mapLSizeY - 5;
    if (mapLX < 20) {
      mapLX = 20;
    }
    if(mapLY > 520) {
      mapLY = 520;
    }
    if (mapLSizeX < 60) {
      mapLSizeX = 60;
    }
    if(mapLSizeY < 60) {
      mapLSizeY = 60;
    }
  }else if(stateOfMapL == 6) {
  image(mapL,mapLX,mapLY, mapLSizeX,mapLSizeY);
    
    mapLX = mapLX + 10;
    mapLY = mapLY - 10;
    mapLSizeX = mapLSizeX + 5;
    mapLSizeY = mapLSizeY + 5;
    if (mapLX > 80) {
      mapLX = 80;
    }
    if(mapLY < 100) {
      mapLY = 100;
    }
    if (mapLSizeX > 640) {
      mapLSizeX = 60;
    }
    if(mapLSizeY > 400) {
      mapLSizeY = 400;
    }
  }
  
    
    
      
  if (mapLX == 80 && mapLY == 100 && mapLSizeX == 640 && mapLSizeY == 400) {
    stateOfMapL = 3;
    image(mapL,mapLX,mapLY, mapLSizeX,mapLSizeY);
    lock = false;
  }
    
  if (mapLX == 20 && mapLY == 520 && mapLSizeX == 60 && mapLSizeY == 60) {
    stateOfMapL = 5;
    image(mapL,mapLX,mapLY, mapLSizeX,mapLSizeY);
    lock = false;
  }
    
  if (mapLX == 80 && mapLY == 100 && mapLSizeX == 640 && mapLSizeY == 400) {
    stateOfMapL = 3;
    image(mapL,mapLX,mapLY, mapLSizeX,mapLSizeY);
    lock = false;
  }
}

function ID () {
  upID = sqrt(((mouseX-(width/2))*(mouseX-(width/2))) + ((mouseY-40)*(mouseY-40)));
  downID = sqrt(((mouseX-(width/2))*(mouseX-(width/2))) + ((mouseY-560)*(mouseY-560)));
}

function mousePressed () {
    if(mouseX > mapLX && mouseX < mapLX + mapLSizeX && mouseY > mapLY && mouseY < mapLY + mapLSizeY && mouseIsPressed == true && lock == false){
      if (page == 1) {
        lock = true;
        stateOfMapL = 1 + stateOfMapL;
      }
      if (page != 1 && stateOfMapL > 1) {
        lock = true;
        stateOfMapL = 1 + stateOfMapL;
        
      }
      
      ///true only returnsto false in this function
  }
}
/*
function mouseReleased () {
  lock = false;
}*/

function test () {
  fill(255, 0, 0);  
  text("upID"+int(upID), 40, 20);
  text(page+"page", 40, 40);
  text(stateOfMapL+"state",40,60);
  text(lock,40,80);
}