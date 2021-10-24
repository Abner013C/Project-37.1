var canvas, backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}

//idea extra: mejoras
//1.1 hacer que cada que alguien conteste una pregunta incorrecta, no desaparezcan el titulo ni los imputus
//1.2 y mostrar text("Your answer has been submited", 10, 10);
//2.1 poder reiniciar la base de datos remotamente sin tener que hacerlo manualmente