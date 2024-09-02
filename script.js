function rollDice() 
{
    var random1=(Math.floor(Math.random()*6))+1;

    var randomImageSource="images/dice"+random1+".png";

    document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

    var random2=(Math.floor(Math.random()*6))+1;

    var randomImageSource2="images/dice"+random2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

    if(random1>random2)
    {
        document.querySelector("h1").innerHTML=name1+"Wins!";
    }
    else if(random1<random2)
    {
        document.querySelector("h1").innerHTML=name2+" Wins!";
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw!";
    }
}

var name1=prompt("Enter Player 1 Name:");

var name2=prompt("Enter Player 2 Name:");
document.getElementById("rollButton").addEventListener("click", rollDice);

document.querySelectorAll(".dice p")[0].innerText=name1;

document.querySelectorAll(".dice p")[1].innerText=name2;