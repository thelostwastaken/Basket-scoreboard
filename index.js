let Homescore = 0
let CurrentGuestScore = 0


function addhomepoints(points) {
    Homescore += points
    document.getElementById("score").textContent = Homescore
}

function addguestpoints(points) {
    CurrentGuestScore += points
    document.getElementById("scoreG").textContent = CurrentGuestScore
}

function reset() {
  Homescore = 0
  CurrentGuestScore = 0
  document.getElementById("scoreG").textContent = CurrentGuestScore
  document.getElementById("score").textContent = Homescore
}