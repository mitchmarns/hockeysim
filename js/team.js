// Team creation and management
document.addEventListener("DOMContentLoaded", () => {
  const teams = JSON.parse(localStorage.getItem("teams")) || [];
  const teamContainer = document.getElementById("team-container");

  // Function to display teams
  const displayTeams = () => {
    teamContainer.innerHTML = teams
      .map(team => `<p>${team.name} - ${team.players.length} players</p>`)
      .join("");
  };

  displayTeams();
});
