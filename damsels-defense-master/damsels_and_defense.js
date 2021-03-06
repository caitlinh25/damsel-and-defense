var button;
var canvas;
var character;
var vid1, vid2, vid3, vid4;
var song;
var punch_createimg;
var cheer_createimg;
var cry_createimg;
var punch_loadimg, cheer_loadimg, cry_loadimg;
var bad1_createimg;
var bad1_loadimg;
var bad2_createimg;
var bad2_loadimg;

function preload(){

  punch_loadimg = loadImage("punch.gif");
  cheer_loadimg = loadImage("cheer.gif");
  cry_loadimg = loadImage("cry.gif");
  bad1_loadimg = loadImage("Bad guy 1.png");
  bad2_loadimg = loadImage("Bad guy 2.png");

  punch_createimg = createImg("punch.gif");
  cheer_createimg = createImg("cheer.gif");
  cry_createimg = createImg("cry.gif");
  bad1_createimg = createImg("Bad guy 1.png");
  bad2_createimg = createImg("Bad guy 2.png");

  // image(cry_createimg,0,0);

  song = loadSound('Roar.mp3');
  vid1 = createVideo ("lesson1.mp4");
  vid2 = createVideo ("lesson2.mp4");
  vid3 = createVideo ("lesson3.mp4");
  vid4 = createVideo ("lesson4.mp4");
}

function setup(){
  createCanvas(1345,640);
  background('#222222');

  punch_createimg.position(350,250);
  cheer_createimg.position(400,200);
  cry_createimg.position(590,200);
  bad1_createimg.position(600,200);
  bad2_createimg.position(700,300);

  cheer_createimg.hide();
  cry_createimg.hide();
  bad1_createimg.hide();
  bad2_createimg.hide();

  song.loop();

  vid1.hide();
  vid1.volume(0);

  vid2.hide();
  vid2.volume(0);

  vid3.hide();
  vid3.volume(0);

  vid4.hide();
  vid4.volume(0);

  title = "Damsels\n&\nDefense";
  textAlign("center");
 	textFont("VT323");
  textSize(80);
  fill(255,255,255);
  text(title, 650, 250);

  button = createButton("Play");
	button.position(610,500);
  button.size(100,40);
	button.mousePressed(stats);
}

function stats(){
  button.hide();
  punch_createimg.hide();

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

function draw(){

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

  vid1.show();
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

  success_title = "You have succeeded"
  textSize(100);
  text(success_title,650,100);

  cry_createimg.hide();
  bad2_createimg.show();
  cheer_createimg.show();


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

  fail_title = "You Failed"
  textSize(80);
  fill(255,218,185);
  text(fail_title,650,100);

  cry_createimg.show();
  // image(cry_createimg,0,height/2, cry_createimg.width*2, cry_createimg.height*2);


}

function lesson2(){
  button6.hide();
  cheer_createimg.hide();
  bad2_createimg.hide();
  cry_createimg.hide();

  button7 = createButton("-->")
  button7.position(1200,570);
  button7.size(100,40);
  button7.mousePressed(game2);

  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  title4 = "Lesson 2"
  textSize(60);
  textAlign("center");
  fill(0,0,0);
  text(title4,660, 120);


  vid2.show();
  vid2.volume(0);
  vid2.size(700, 600);
  vid2.position(320,75);

  vid2.loop();

  }
function game2(){
  vid2.hide();
  button7.hide();

  button8 = createButton("-->")
  button8.position(1200,570);
  button8.size(100,40);

  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  title5 = "Lesson 2 Game"
  textSize(60);
  textAlign("center");
  fill(0,0,0);
  text(title5,660, 120);

  scenario2 = "You are standing very close to an alleyway, waiting for your friend. \n Someone suddenly grabs you from behind, wrapping their arms around \n you violently. Put the steps in order to escape the attacker's hold. "
  textAlign("center");
  textStyle("normal");
  textSize(30);
  fill(0,0,0);
  text(scenario2,660,165);

  option5 = "shift hips to one side"
  textSize(30);
  textStyle("normal");
  fill(0,0,0);
  text(option5,750,280);

  option6 = "when attacker lets go, turn around \n and interlock your hands behind the \n attacker's neck"
  textSize(30);
  textStyle("normal");
  fill(0,0,0);
  text(option6,750, 315);

  option7 = "with your knee, kick the\n attacker's groin"
  textSize(30);
  textStyle("normal");
  fill(0,0,0);
  text(option7,750, 430);

  option8 = "hold the attacker's arms and \n contract your body"
  textSize(30);
  textStyle("normal");
  fill(0,0,0);
  text(option8,740, 510);

  option9 = "make a fist and strike the attacker's groin"
  textSize(30);
  textStyle("normal");
  fill(0,0,0);
  text(option9,775, 590);


  sel5 = createSelect();
  sel5.position(430,275);
  sel5.option('1');
  sel5.option('2');
  sel5.option('3');
  sel5.option('4');
  sel5.option('5');

  sel6 = createSelect();
  sel6.position(430, 345);
  sel6.option('1');
  sel6.option('2');
  sel6.option('3');
  sel6.option('4');
  sel6.option('5');

  sel7 = createSelect();
  sel7.position(430, 425);
  sel7.option('1');
  sel7.option('2');
  sel7.option('3');
  sel7.option('4');
  sel7.option('5');

  sel8 = createSelect();
  sel8.position(430, 510);
  sel8.option('1');
  sel8.option('2');
  sel8.option('3');
  sel8.option('4');
  sel8.option('5');

  sel9 = createSelect();
  sel9.position(430, 580);
  sel9.option('1');
  sel9.option('2');
  sel9.option('3');
  sel9.option('4');
  sel9.option('5');

 sel5.changed(mySelectEvent2);
 sel6.changed(mySelectEvent2);
 sel7.changed(mySelectEvent2);
 sel8.changed(mySelectEvent2);
 sel9.changed(mySelectEvent2);

function mySelectEvent2(){
  var step5 = sel5.value();
  var step6 = sel6.value();
  var step7 = sel7.value();
  var step8 = sel8.value();
  var step9 = sel9.value();

    if (step5 == 2 && step6 ==4 && step7 ==5 && step8 ==1 && step9 ==3){
        button8.mousePressed(success2);
    }
    else {
        button8.mousePressed(failure2);
      }
    }
}

  function success2() {
    button8.hide();
    sel5.hide();
    sel6.hide();
    sel7.hide();
    sel8.hide();
    sel9.hide();

    button9 = createButton("-->")
    button9.position(1200,570);
    button9.size(100,40);
    button9.mousePressed(lesson3);

    background('#222222');

    success_title1 = "You have succeeded"
    textSize(100);
    text(success_title1,650,100);

    cry_createimg.hide();
    bad2_createimg.show();
    cheer_createimg.show();
  }

  function failure2() {
    button8.hide();
    sel5.hide();
    sel6.hide();
    sel7.hide();
    sel8.hide();
    sel9.hide();

    button9 = createButton("-->")
    button9.position(1200,570);
    button9.size(100,40);
    button9.mousePressed(lesson3);

    background('#222222');

    fail_title1 = "You Failed"
    textSize(80);
    fill(255,218,185);
    text(fail_title1,650,100);

    cry_createimg.show();

  }

function lesson3(){
    button9.hide();
    cheer_createimg.hide();
    bad2_createimg.hide();
    cry_createimg.hide();

    button10 = createButton("-->")
    button10.position(1200,570);
    button10.size(100,40);
    button10.mousePressed(game3);

    background('#222222');
    fill(255,218,185);
    rect(30, 40, 1277, 571);

    title6= "Lesson 3"
    textSize(60);
    textAlign("center");
    fill(0,0,0);
    text(title6,660, 120);

    vid3.show();
    vid3.volume(0);
    vid3.size(700, 600);
    vid3.position(320,75);

    vid3.loop();

    }
function game3(){
  vid3.hide();
  button10.hide();

  button11 = createButton("-->")
  button11.position(1200,570);
  button11.size(100,40);

      background('#222222');
      fill(255,218,185);
      rect(30, 40, 1277, 571);

      title7 = "Lesson 3 Game"
          textAlign("center");
          textSize(60);
          fill(0,0,0);
          text(title7,660, 120);

      scenario3 = "An attacker grabs your neck and tries to choke you. \n Put the steps in order to escape the attacker's choke. "
      textAlign("center");
      textStyle("normal");
      textSize(30);
      fill(0,0,0);
      text(scenario3,660,165);

      option10 = "crunch downwards, trapping \n the attacker's hand"
      textSize(30);
      textStyle("normal");
      fill(0,0,0);
      text(option10,750,262);

      option11 = "strike elbow to attacker's face"
      textSize(30);
      textStyle("normal");
      fill(0,0,0);
      text(option11,750, 370);

      option12 = "turn whole body to opposite side"
      textSize(30);
      textStyle("normal");
      fill(0,0,0);
      text(option12,750, 451);

      option13 = "lift one arm up"
      textSize(30);
      textStyle("normal");
      fill(0,0,0);
      text(option13,740, 533);


      sel10 = createSelect();
      sel10.position(470,265);
      sel10.option('1');
      sel10.option('2');
      sel10.option('3');
      sel10.option('4');


      sel11 = createSelect();
      sel11.position(470, 362);
      sel11.option('1');
      sel11.option('2');
      sel11.option('3');
      sel11.option('4');

      sel12 = createSelect();
      sel12.position(470, 445);
      sel12.option('1');
      sel12.option('2');
      sel12.option('3');
      sel12.option('4');

      sel13 = createSelect();
      sel13.position(470, 523);
      sel13.option('1');
      sel13.option('2');
      sel13.option('3');
      sel13.option('4');

       sel10.changed(mySelectEvent3);
       sel11.changed(mySelectEvent3);
       sel12.changed(mySelectEvent3);
       sel13.changed(mySelectEvent3);

    function mySelectEvent3(){
      var step10 = sel10.value();
      var step11 = sel11.value();
      var step12= sel12.value();
      var step13= sel13.value();

      if (step10 == 4 && step11 ==3 && step12 ==1 && step13 ==2){
          button11.mousePressed(success3);
      }
      else {

          button11.mousePressed(failure3);
        }
      }
    }

    function success3() {
      button11.hide();
      sel10.hide();
      sel11.hide();
      sel12.hide();
      sel13.hide();

      button12 = createButton("-->")
      button12.position(1200,570);
      button12.size(100,40);
      button12.mousePressed(lesson4);

      background('#222222');


      success_title2 = "You have succeeded"
      textSize(100);
      text(success_title2,650,100);

      cry_createimg.hide();
      bad2_createimg.show();
      cheer_createimg.show();
    }

    function failure3() {
      button11.hide();
      sel10.hide();
      sel11.hide();
      sel12.hide();
      sel13.hide();

      button12 = createButton("-->")
      button12.position(1200,570);
      button12.size(100,40);
      button12.mousePressed(lesson4);

      background('#222222');

      fail_title2 = "You Failed"
      textSize(80);
      fill(255,218,185);
      text(fail_title2,650,100);

      cry_createimg.show();

    }

function lesson4(){
    button12.hide();
    cheer_createimg.hide();
    bad2_createimg.hide();
    cry_createimg.hide();

    button13 = createButton("-->")
    button13.position(1200,570);
    button13.size(100,40);
    button13.mousePressed(game4);

    background('#222222');
    fill(255,218,185);
    rect(30, 40, 1277, 571);

    title8= "Lesson 4"
    textSize(60);
    textAlign("center");
    fill(0,0,0);
    text(title8,660, 120);

    vid4.show();
    vid4.volume(0);
    vid4.size(700, 600);
    vid4.position(320,75);

    vid4.loop();

}

function game4 (){
  button13.hide()
  vid4.hide()
  background('#222222');
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  button14= createButton("-->")
  button14.position(1200,570);
  button14.size(100,40);

  title7 = "Lesson 4 Game"
  textAlign("center");
  fill(0,0,0);
  text(title7,660, 120);

  scenario4 = "You are waiting at a bus stop when a stranger grabs your hair. \n Put the steps in order to escape the attacker's hold. "
  textAlign("center");
  textSize(30);
  fill(0,0,0);
  text(scenario4,660,165);

  option14 = "go under the arm and up and around"
  textSize(30);
  fill(0,0,0);
  text(option14,740,290);

  option15 = "squeeze elbows in to protect the face"
  textSize(30);
  fill(0,0,0);
  text(option15,740, 370);

  option16 = "lock both hands on top of the attacker's hands"
  textSize(30);
  fill(0,0,0);
  text(option16,770, 450);

  option17 = "when unraveled, push attacker's arm forward \n and up to dislocate shoulder"
  textSize(30);
  fill(0,0,0);
  text(option17,760, 520);

  sel14 = createSelect();
  sel14.position(450, 280);
  sel14.option('1');
  sel14.option('2');
  sel14.option('3');
  sel14.option('4');

  sel15 = createSelect();
  sel15.position(450, 360);
  sel15.option('1');
  sel15.option('2');
  sel15.option('3');
  sel15.option('4');

  sel16 = createSelect();
  sel16.position(450, 440);
  sel16.option('1');
  sel16.option('2');
  sel16.option('3');
  sel16.option('4');

  sel17 = createSelect();
  sel17.position(450, 510);
  sel17.option('1');
  sel17.option('2');
  sel17.option('3');
  sel17.option('4');

   sel14.changed(mySelectEvent4);
   sel15.changed(mySelectEvent4);
   sel16.changed(mySelectEvent4);
   sel17.changed(mySelectEvent4);

function mySelectEvent4(){
  var step14 = sel14.value();
  var step15= sel15.value();
  var step16 = sel16.value();
  var step17 = sel17.value();

  if (step14 == 3 && step15 == 2 && step16 == 1 && step17 == 4){
      button14.mousePressed(success4);
  }
  else {
      button14.mousePressed(failure4);
    }
  }
}

function success4() {
  button14.hide();
  sel14.hide();
  sel15.hide();
  sel16.hide();
  sel17.hide();

  button15 = createButton("-->")
  button15.position(1200,570);
  button15.size(100,40);
  button15.mousePressed(citations);

  background('#222222');

  title3 = "You have succeeded"
  textSize(100);
  text(success_title3,650,100);

  cry_createimg.hide();
  bad2_createimg.show();
  cheer_createimg.show();
}

function failure4() {
  button14.hide();
  sel14.hide();
  sel15.hide();
  sel16.hide();
  sel17.hide();

  button15 = createButton("-->")
  button15.position(1200,570);
  button15.size(100,40);
  button15.mousePressed(citations);

  background('#222222');

  fail_title3 = "You Failed"
  textSize(80);
  fill(255,218,185);
  text(fail_title3,650,100);

  cry_createimg.show();

}

function citations(){
    button15.hide();
    cry_createimg.hide();
    cheer_createimg.hide();

    background('#222222');
    fill(255,218,185);
    rect(30, 40, 1277, 571);

     button16 = createButton("-->")
     button16.position(1200,570);
     button16.size(100,40);
     button16.mousePressed(resources1);

     title8 = "Citations"
     textAlign("center");
     textSize(60);
     fill(0,0,0);
     text(title8,660, 120);

    textSize(30);
    fill(0,0,0);
    textAlign("center");
    cite= "Video: \n   Buzzfeed: Simple Self-Defense Moves You Should Know \n Statistics: \n https://www.rainn.org/statistics/scope-problem \n https://www.nsvrc.org/sites/default/files/publications_nsvrc_factsheet \n _media-packet_statistics-about-sexual-violence_0.pdf \n Music: \n Katy Perry- Roar"
    text(cite, 660, 200);
}

function resources1(){
    button16.hide();

    background('#222222');
    fill(255,218,185);
    rect(30, 40, 1277, 571);

     button17 = createButton("-->")
     button17.position(1200,570);
     button17.size(100,40);
     button17.mousePressed(resources2);

     title11 = "Resources"
     textSize(60);
     textAlign("center");
     fill(0,0,0);
     text(title11,660, 120);

    textSize(30);
    fill(0,0,0);
    textAlign("center");
    resource1= "More self defense lessons and tips: \n http://www.shieldselfdefense.com/ \n http://www.womensselfdefense-seps.com \n http://lifehacker.com/5825528/basic-self-defense-moves-anyone-can-do-and-everyone-should-know \n http://kidshealth.org/en/teens/self-defense.html"
    text(resource1, 660, 200);
}

function resources2() {
    button17.hide();

    background('#222222');
    fill(255,218,185);
    rect(30, 40, 1277, 571);

     button18 = createButton("-->")
     button18.position(1200,570);
     button18.size(100,40);
     button18.mousePressed(about);

     title12 = "Resources (cont.)"
     textAlign("center");
     textSize(60);
     fill(0,0,0);
     text(title12,660, 120);

     textSize(30);
     fill(0,0,0);
     textAlign("center");
     resource2= "Victim help: \n National Sexual Assault Hotline: 800-656-HOPE (4673) \n National Domestic Violence Hotline: 1-800-799-7233 or 1-800-787-3224 (TTY) \n Online Directory of Crime Victim Services: http://ovc.ncjrs.gov/findvictimservices/ \n National Resources for Sexual Assault Survivors and their Loved Ones: \n  https://www.rainn.org/national-resources-sexual-assault-survivors-and-their-loved-ones \n Bulletins for Teens: Assault \n http://victimsofcrime.org/help-for-crime-victims/get-help-bulletins-for-crime-victims/ \n bulletins-for-teens/assault \n Options for Victims: \n http://victimsofcrime.org/help-for-crime-victims/get-help-bulletins-for-crime-victims/ \n options-for-victims \n"
     text(resource2, 660, 180);
}

function about() {
    button18.hide();

    background('#222222');
    fill(255,218,185);
    rect(30, 40, 1277, 571);

    title13 = "About Us"
    textSize(60);
    textAlign("center");
    fill(0,0,0);
    text(title13,660, 120);

     textSize(30);
     fill(0,0,0);

     info3= "Hi! We are four Girls Who Code students who wanted to combat \n increasing cases of assault by teaching self defense. \n Creators: \n Caitlin Hall \n  Uzma Kapadia \n Michelle Li \n Anjana Thomas"
     text(info3, 660, 220);

}
