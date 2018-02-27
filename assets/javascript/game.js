$(document).ready(function () {


    var min = 19;
    var max = 120;
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    var randomNum = document.getElementById("generated-num")
    var btn1 = Math.floor(Math.random() * 12 + 1)
    var totalScore = document.getElementById("total-score")
    var btn2 = Math.floor(Math.random() * 12 + 1)
    var btn3 = Math.floor(Math.random() * 12 + 1)
    var btn4 = Math.floor(Math.random() * 12 + 1)
    var total = 0; 
    var wins = 0; 
    var losses = 0; 
    var winScreen = document.getElementById("win"); 
    var lossScreen = document.getElementById("losses"); 

 
    
 function reset() {
        var numberToGuess = Math.floor(Math.random() * 120) + 19;
        $(randomNum).text(numberToGuess);
        total = 0; 
        btn1 = Math.floor(Math.random() * 12 + 1); 
        btn2 = Math.floor(Math.random() * 12 + 1); 
        btn3 = Math.floor(Math.random() * 12 + 1); 
        btn4 = Math.floor(Math.random() * 12 + 1); 
        totalScore.innerText = 0; 
    } 


    function random() {
        return ($(savedNum));}

    function endGame () {
         if (random === total) {
            alert("You Win!"); 
            wins++; 
            winScreen.textContent = ("Wins: " + wins);
            reset ();
            }
        
        if (total > random) {
            alert("You Lose!"); 
            losses++; 
            lossScreen.textContent = ("Losses: " + losses);
            reset (); 
            }
        }

        
    randomNum.textContent = random


    $('.btn-1').on('click', function () {
        $(btn1).push("total-score");
        console.log(btn1)
        total = (total + btn1); 
        totalScore.innerText = total;
        endGame();

    })
    

    $('.btn-2').on('click', function () {
        $(btn2).push(totalScore);
        console.log(btn2)
        total = (total + btn2); 
        totalScore.innerText = total;
        endGame();
    

    })
  

    $('.btn-3').on('click', function () {
        $(btn3).push("total-score");
        console.log(btn3)
        total = (total + btn3); 
        totalScore.innerText = total;
        endGame(); 
   

    })
   

    $('.btn-4').on('click', function () {
        $(btn4).push("total-score");
        console.log(btn4)
        total = (total + btn4); 
        totalScore.innerText = total;
        endGame();
    

    })


})








