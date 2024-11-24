document.getElementById("simulate-button").addEventListener("click", () => {
  const team1 = "Team A";
  const team2 = "Team B";
  const score1 = Math.floor(Math.random() * 5);
  const score2 = Math.floor(Math.random() * 5);

  const result = `${team1}: ${score1}, ${team2}: ${score2}`;
  document.getElementById("game-result").innerText = result;
});// Game Simulation
