var playerName1 = prompt("Hey player 1, enter your name: ");
var playerName2 = prompt("Hey player 2, enter your name: ");

document.querySelector("p.player1").innerHTML = playerName1;
document.querySelector("p.player2").innerHTML = playerName2;

var randomNumber1 = Math.floor(Math.random()*6 + 1);  //1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1 to dice6

var randomImageSource1 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomImageSource1 > randomImageSource2)
  {
    document.querySelector("h1").innerHTML = playerName1 + "🚩wins";
  }

else if (randomImageSource1  < randomImageSource2)
{

  document.querySelector("h1").innerHTML = playerName2 + "🚩wins";
}

else
  document.querySelector("h1").innerHTML = "🧐It's a DRAW";
