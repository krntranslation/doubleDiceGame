// THREE IS THE MAGIC NUMBER
//Player to 99 first wins


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
      			}
      	}






      	}

      	}

scoring()






















         // 	let diceFour = rollDice(3);
       		// let diceSix = rollDice(4);
       		// let diceNine = rollDice(5);
       		// let diceTwelve = rollDice(6);
       		// let diceFourteen = rollDice(7);
       		// let diceTwenty = rollDice(8);
        // 	let dices =[diceFour,diceSix,diceNine,diceTwelve,diceFourteen,diceTwenty];
        // console.log (dices)
         
        //  for (i = 0; i < dices.length; i++){
        //    if(dices[i] 3 === 0){
        //    score += (dices[i])
        //       }
        //    else if(dices[i] % 3 != 0){
        //    score += (0)
        //       }          
        //  }
        //  console.log (score)
         
//          // let playagain = prompt("play again")
//      		// }
 
//  		{
//  	// prompt("dont u wanna play?")
// //  		}
// // 	}
// // }
// scoring()


// copy of 3 code

// function rollDice(sides){
//         return Math.floor((Math.random() * sides) + 1);
// }
// function scoring(){
//      let score = 0
     
//      for(j = 0; j < 100 && score < 100; j++){
//       	if(playagain = "y"){   
//          	let diceFour = rollDice(4);
//        		let diceSix = rollDice(6);
//        		let diceNine = rollDice(9);
//        		let diceTwelve = rollDice(12);
//        		let diceFourteen = rollDice(14);
//        		let diceTwenty = rollDice(20);
//         	let dices =[diceFour,diceSix,diceNine,diceTwelve,diceFourteen,diceTwenty];
//         console.log (dices)
         
//          for (i = 0; i < dices.length; i++){
//            if(dices[i] % 3 === 0){
//            score += (dices[i])
//               }
//            else if(dices[i] % 3 != 0){
//            score += (0)
//               }          
//          }
//          console.log (score)
         
//          // let playagain = prompt("play again")
//      		}
 
//  		{
//  	// prompt("dont u wanna play?")
//  		}
// 	}
// }
// scoring()


