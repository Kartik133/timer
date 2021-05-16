var hor,min,sec;
var gameState = "start";
var horInput,minInput,secInput,start;
var hr,minu,seco;
var timerHr,timerMn,timerSc;
var hr3,min3,sec3;
var valueMin,valueSec,valueHor,y,y2,y3,y4;

function setup() {
   createCanvas(400,400);
    horInput = createInput("00");
    minInput = createInput("00");
    secInput = createInput("00");
    start = createButton("START");
    y = 200;
    y2 = 215;
    y3 = 265;
    y4 = 320;
}

function draw() {
   

   if(gameState==="start") {
     horInput.position(210,200);
     minInput.position(210,250);
     secInput.position(210,300);
     start.position(210,350);
     horInput.style("width","40px");
     minInput.style("width","40px");
     secInput.style("width","40px");
     start.mousePressed(()=>{
        hor = hour();
        min = minute();
        sec = second();
        horInput.hide();
        minInput.hide();
        secInput.hide();
        start.hide();
        gameState = "start2";
     })
   }

   if(gameState==="start2") {
      valueHor = horInput.value();
      valueMin = minInput.value();
      valueSec = secInput.value();
      horInput.hide();
      minInput.hide();
      secInput.hide();
      start.hide();
      hr = hour();
      minu = minute();
      seco = second();
      hr3 = hor + valueHor;
      min3 = min + valueMin;
      sec3 = sec + valueSec;
      timerHr = hr3-hr;
      timerMn = min3-minu;
      timerSc = sec3-seco;
      textSize(30);
      fill(0);
      //camera.y = y;
      text(timerHr + " : " + timerMn + " : " + timerSc,200,y);
      y2-=400;
      y3-=400;
      y4-=400;
   }
   
   fill(0);
   textSize(20);
   text("hour",130,y2);
   text("minute",130,y3);
   text("second",130,y4);
}