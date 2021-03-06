class Quiz{
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    question.hide();

    //escribe aquí el código para cambiar el color de fondo 
    background("yellow");

    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    fill("black");
    textSize(30);
    text("Quiz results: ", 200, 50);

    //llama aquí a getContestantInfo( )
    Contestant.getPlayerInfo();
  
    //escribe la condición para comprobar si contestantInfor no está indefinido
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("The person who answered correctly is highlighted in green.", 140, 220);
      //escribe el código para resaltar al concursante que respondió correctamente
      for(var plr in allContestants){
        debugger;
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers);
      }
    }
  }
}
