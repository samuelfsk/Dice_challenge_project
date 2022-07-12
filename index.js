

var RandomNumber = Math.floor(Math.random()*6)+1;
var RandomNumber2 = Math.floor(Math.random()*6)+1;
console.log(RandomNumber);
document.querySelector(".img1").setAttribute("src", "images/dice"+RandomNumber+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+RandomNumber2+".png");
if(RandomNumber>RandomNumber2){
  document.querySelector("h1").textContent="Player-1 Wins";
}else if(RandomNumber<RandomNumber2){
  document.querySelector("h1").textContent="Player-2 Wins";
}else{
  document.querySelector("h1").textContent="It's a Draw";
}
