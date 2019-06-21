$(document).ready(function(){


var startnumb = 0
var playerpoints = 0
var crystal1 = 0
var crystal2 = 0
var crystal3 = 0
var crystal4 = 0
var wins = 0
var losses = 0


function setStartNum() {
   startnumb = Math.floor(Math.random()*120) + 12
   $('#startingnum').text('number: '+startnumb)
   setCrystalsNum()
   $('#start').remove()
}

function crystal1click () {
   playerpoints = playerpoints + crystal1
   $('#playerpoints').text(playerpoints)
   if (playerpoints === startnumb) {
      wins++
      playerpoints = 0
      startnumb = 0
      setCrystalsNum()
      setStartNum()
      $('#playerpoints').text(playerpoints)
      $('#wins').text('wins: '+wins)

   }
   else if (playerpoints > startnumb) {
      losses++
      playerpoints = 0
      startnumb = 0
      setCrystalsNum()
      setStartNum()
      $('#playerpoints').text(playerpoints)
      $('#losses').text('wins: '+losses)
   }
}
function crystal2click () {
   playerpoints = playerpoints + crystal2
   $('#playerpoints').text(playerpoints)
   if (playerpoints === startnumb) {
      wins++
      playerpoints = 0
      startnumb = 0
      setCrystalsNum()
      setStartNum()
      $('#wins').text('wins: '+wins)
   }
   else if (playerpoints > startnumb) {
      losses++
      playerpoints = 0
      startnumb = 0
      setCrystalsNum()
      setStartNum()
      $('#losses').text('wins: '+losses)
   }
}
function crystal3click () {
   playerpoints = playerpoints + crystal3
   $('#playerpoints').text(playerpoints)
   if (playerpoints === startnumb) {
      wins++
      playerpoints = 0
      startnumb = 0
      setCrystalsNum()
      setStartNum()
      $('#playerpoints').text(playerpoints)
      $('#wins').text('wins: '+wins)
   }   
    else if (playerpoints > startnumb) {
      losses++
      playerpoints = 0
      startnumb = 0
      setCrystalsNum()
      setStartNum()
      $('#playerpoints').text(playerpoints)
   }
}
function crystal4click () {
   playerpoints = playerpoints + crystal4
   $('#playerpoints').text(playerpoints)
   if (playerpoints === startnumb) {
      wins++
      playerpoints = 0
      startnumb = 0
      setCrystalsNum()
      setStartNum()
      $('#playerpoints').text(playerpoints)
      $('#wins').text('wins: '+wins)
   }
   else if (playerpoints > startnumb) {
      losses++
      playerpoints = 0
      startnumb = 0
      setCrystalsNum()
      setStartNum()
      $('#playerpoints').text(playerpoints)
      $('#losses').text('wins: '+losses)
   }
}

function setCrystalsNum () {
   crystal1 = Math.floor(Math.random()*12) +1
   crystal2 = Math.floor(Math.random()*12) +1
   crystal3 = Math.floor(Math.random()*12) +1
   crystal4 = Math.floor(Math.random()*12) +1 
}


$('#start').click(setStartNum)
$('#crystal1').click(crystal1click)
$('#crystal2').click(crystal2click)
$('#crystal3').click(crystal3click)
$('#crystal4').click(crystal4click)

})