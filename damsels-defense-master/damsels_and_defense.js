var button;
var canvas;
var vid;
var princess;

function setup(){
  canvas = createCanvas(1345,640);
  background(45);
  canvas.class("lemon");

  title = "Damsels & Defense";
 	textFont("VT323");
  textSize(80);
  fill(255,255,255);
  text(title, 450, 321);

  princess = createSprite(400, 150, 50, 100);
  var punching = princess.addAnimation("punch1.png", "punch2.png", "punch3.png");

  button = createButton("Play");
	button.position(677,400);
  button.size(100,40);
	button.mousePressed(stats);
  // sound = loadSound("damsels_and_defense_music.mp3");
  // sound.loop();
}


// function loaded(){
// 	song.play();
// }
//
// function draw(){ss
// //   	sound.setVolume(0.1);
//


function stats(){
  button.hide();

  button2 = createButton("-->")
  button2.position(1200,570);
  button2.size(100,40);
  button2.mousePressed(stats2);

  // console.log("got to the function");
  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

//*** if arrow is pressed then goes to the next info
  info1 = " Every 98 seconds, an American \n is sexually assaulted and every \n 8 minutes that person is a child."
  textAlign("center")
  fill(0,0,0);
  text(info1,650, 230);
}


function stats2(){
  button2.hide();

  button3 = createButton("-->")
  button3.position(1200,570);
  button3.size(100,40);
  button3.mousePressed(stats3);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info2 = " However, only 6 out of every \n 1000 perpetrators end in jail."
  textAlign("center")
  fill(0,0,0);
  text(info2,650, 230);
  }

function stats3(){
  button3.hide();

  button4 = createButton("-->")
  button4.position(1200,570);
  button4.size(100,40);
  button4.mousePressed(stats4);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info3 = " In these assaults, 90% of \n the victims tend to be female while \n the other 10% is male."
  textAlign("center");
  fill(0,0,0);
  text(info3,650, 230);
}

function stats4(){
  button4.hide();

  button5 = createButton("-->")
  button5.position(1200,570);
  button5.size(100,40);
  button5.mousePressed(stats5);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info4 = " Statistics have shown that \n about 55% of the time, these assaults \n happened either at or near the \n victim's house."
  textAlign("center");
  fill(0,0,0);
  text(info4,650, 170);
}

function stats5(){
  button5.hide();

  button6 = createButton("-->")
  button6.position(1200,570);
  button6.size(100,40);
  button6.mousePressed(lesson1);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info5 = " Lastly, one of the most \n under-reported crime is rape as over \n 63% sexual assaults are not \n reported to the police."
  textAlign("center");
  fill(0,0,0);
  text(info5,650, 170);
}

function lesson1(){
  button6.hide();

  button7 = createButton("-->")
  button7.position(1200,570);
  button7.size(100,40);
  button7.mousePressed(game1);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);
  title1 = "Lesson 1"
  textAlign("center");
  fill(0,0,0);
  text(title1,660, 120);

  vid = createVideo ("lesson1.mp4");
  vid.volume(0);
  vid.size(700, 600);
  vid.position(320,75);

  vid.loop();
}

function game1 (){
  button7.hide()
  vid.hide()
  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  title2 = "Lesson 1 Game"
  textAlign("center");
  fill(0,0,0);
  text(title2,660, 120);

  scenario1 = "You are walking down the street at night and someone \n walks up to you. He grabs you forcefully by the hand and \n refuses to let go. Put the steps in order to escape his grasp. "
  textAlign("center");
  textSize(30);
  fill(0,0,0);
  text(scenario1,660,165);

  option1 = "with the arm he is holding \n point the elbow up"
  textSize(30);
  fill(0,0,0);
  text(option1,750,290);

  option2 = "go over his arm and slice \n down using force"
  textSize(30);
  fill(0,0,0);
  text(option2,750, 380);

  option3 = "run"
  textSize(30);
  fill(0,0,0);
  text(option3,750, 470);

  option4 = "grab your own fist with \n your free hand"
  textSize(30);
  fill(0,0,0);
  text(option4,740, 520);


  sel1 = createSelect();
  sel1.position(500, 290);
  sel1.option('1');
  sel1.option('2');
  sel1.option('3');
  sel1.option('4');

  sel2 = createSelect();
  sel2.position(500, 380);
  sel2.option('1');
  sel2.option('2');
  sel2.option('3');
  sel2.option('4');

  sel3 = createSelect();
  sel3.position(500, 450);
  sel3.option('1');
  sel3.option('2');
  sel3.option('3');
  sel3.option('4');

  sel4 = createSelect();
  sel4.position(500, 520);
  sel4.option('1');
  sel4.option('2');
  sel4.option('3');
  sel4.option('4');

  sel1.changed(myselect);
  sel2.changed(myselect);
  sel3.changed(myselect);
  sel4.changed(myselect);
}
