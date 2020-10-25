function rollDice(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;

  document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
    document.querySelector(".flag2").classList.add("remove");
  }
  else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
    document.querySelector(".flag1").classList.add("remove");
  }
  else{
    document.querySelector("h1").textContent = "Draw!";
    document.querySelector(".flag1").classList.add("remove");
    document.querySelector(".flag2").classList.add("remove");
  }
}
