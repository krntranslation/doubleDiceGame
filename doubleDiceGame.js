
function runGame(){

// var player1 = prompt("first player name");
// var player2 = prompt("second player name");



function rollDice(sides){
        return Math.floor((Math.random() * sides) + 1);
}
function scoring(){
     let score = 0
     let dice1
     let dice2 
     
     for(j = 0; j < 100 && score < 7; j++){
      	
      	if(score === 0){
      		dice1 = rollDice(3); 
      		dice2 = rollDice(3);
      			if(dice1 === dice2){
      				score += 1;
      			}
      	}	 
      	if(score === 1){
      		dice1 = rollDice(4);
      		dice2 = rollDice(4);
      			if(dice1 === dice2){
      				score += 1;
      			}
      	}
      	if(score === 2){
      		dice1 = rollDice(5);
      		dice2 = rollDice(5);
      			if(dice1 === dice2){
      				score += 1;
      			}
      	}
      	if(score === 3){
      		dice1 = rollDice(6);
      		dice2 = rollDice(6);
      			if(dice1 === dice2){
      				score += 1;
      			}
      	}
      	if(score === 4){
      		dice1 = rollDice(7);
      		dice2 = rollDice(7);
      			if(dice1 === dice2){
      				score += 1;
      			}
      	}
      	if(score === 5){
      		dice1 = rollDice(8);
      		dice2 = rollDice(8);
      			if(dice1 === dice2){
      				score += 1;
      			prompt("you win!");
            }
      	}






      	}

      	}

scoring()

}






