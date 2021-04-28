var hr,min,sec;

function setup() {
  createCanvas(700,600);
  
}

function draw() {
  background(0,0,0);  

  textSize(32);
  fill(	"white");
  text("Tick Tock", width/2 - 60, 40);

  angleMode(DEGREES);

  hr = hour();
  min = minute();
  sec = second();

  textSize(22);
  fill("cyan");
  text(hr%12+":"+min+":"+sec, width/2 - 30 , height-20);
  hourAngle = map(hr%12, 0, 12, 0, 360);
  minuteAngle = map(min, 0, 60, 8, 360);
  secondsAngle = map(sec, 0, 60, 0, 360);

  translate(350, 300);
  rotate(-90);

  fill("blue");
  arc(0,0,450,460,hr*30, PI);
  fill("black"); 
  arc(0,0,440,440, PI, PI);

  fill("lime");
  arc(0,0,430,440,min*6, PI);
  fill("black"); 
  arc(0,0,420,420, PI, PI);

  fill("red");
  arc(0,0,410,420,sec*6, PI);
  fill("black"); 
  arc(0,0,400,400, PI, PI);

  push();
  rotate(hourAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0, 0, 120, 0);
  pop();

  push();
  rotate(secondsAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 140, 0);
  pop();


  console.log(hr+' '+min+" "+sec);
  drawSprites();
}