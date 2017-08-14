var button;
var canvas;
var vid1, vid2, vid3, vid4;
var punching, success, fail;
var bad_guy, bad_guy_crying;

function preload(){
  punching = loadAnimation("punch1.png", "punch2.png", "punch3.png");
  success = loadAnimation("cheer.png", "cheer 2.png");
  fail = loadAnimation("cry1.png","cry2.png");
  bad_guy = loadAnimation("Bad guy 1.png", "Bad guy 2.png");
}


function setup(){
  canvas = createCanvas(1345,640);
  background('#222222');
  canvas.class("lemon");

  animation(punching,800,100);
  title = "Damsels & Defense";
 	textFont("VT323");
  textSize(80);
  fill(255,255,255);
  text(title, 400, 321);

  button = createButton("Play");
	button.position(610,400);
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
  background('#222222');
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
  button3.mousePressed(lesson1);

  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info2 = "In these assaults, 90% of \n the victims tend to be female while \n the other 10% is male."
  textAlign("center")
  fill(0,0,0);
  text(info2,650, 230);
  }

function lesson1(){
  button3.hide();

  button4 = createButton("-->")
  button4.position(1200,570);
  button4.size(100,40);
  button4.mousePressed(game1);

  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);
  title1 = "Lesson 1"
  textAlign("center");
  fill(0,0,0);
  text(title1,660, 120);

  vid1 = createVideo ("lesson1.mp4");
  vid1.volume(0);
  vid1.size(700, 600);
  vid1.position(320,75);

  vid1.loop();
}

function game1 (){
  button4.hide()
  vid1.hide()
  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  button5 = createButton("-->")
  button5.position(1200,570);
  button5.size(100,40);

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

   sel1.changed(mySelectEvent1);
   sel2.changed(mySelectEvent1);
   sel3.changed(mySelectEvent1);
   sel4.changed(mySelectEvent1);

function mySelectEvent1(){
  var step1 = sel1.value();
  var step2 = sel2.value();
  var step3 = sel3.value();
  var step4 = sel4.value();

  if (step1 == 2 && step2 ==3 && step3 ==4 && step4 ==1){
      button5.mousePressed(success1);
  }
  else {
      button5.mousePressed(failure1);
    }
  }
}

function success1() {
  button5.hide();
  sel1.hide();
  sel2.hide();
  sel3.hide();
  sel4.hide();

  button6 = createButton("-->")
  button6.position(1200,570);
  button6.size(100,40);
  button6.mousePressed(lesson2);

  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  text1 = "success"
  textSize(30);
  fill(0,0,0);
  text(text1,740, 520);
}

function failure1() {
  button5.hide();
  sel1.hide();
  sel2.hide();
  sel3.hide();
  sel4.hide();

  button6 = createButton("-->")
  button6.position(1200,570);
  button6.size(100,40);
  button6.mousePressed(lesson2);

  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  text2 = "fail"
  textSize(30);
  fill(0,0,0);
  text(text2,740, 520);

}

function lesson2(){
  button6.hide();

  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  title3= "Lesson 2"
  textAlign("center");
  fill(0,0,0);
  text(title3,660, 120);
}
