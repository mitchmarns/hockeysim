import { getAvailablePlayers, assignPlayerToTeam, getTeams } from './team.js';

document.addEventListener('DOMContentLoaded', () => {
  const availablePlayersContainer = document.getElementById('available-players');
  const team1Container = document.getElementById('team-1');
  const team2Container = document.getElementById('team-2');
  const teamDisplay = document.getElementById('team-display');

  // Display available players
  function displayAvailablePlayers() {
    availablePlayersContainer.innerHTML = ''; // Clear existing players
    const availablePlayers = getAvailablePlayers();
    availablePlayers.forEach(player => {
      const playerDiv = document.createElement('div');
      playerDiv.classList.add('player');
      playerDiv.innerHTML = `
        <p>${player.name} - ${player.position}</p>
        <button class="assign-btn" data-id="${player.id}" data-team="Team 1">Assign to Team 1</button>
        <button class="assign-btn" data-id="${player.id}" data-team="Team 2">Assign to Team 2</button>
      `;
      availablePlayersContainer.appendChild(playerDiv);
    });
  }

  // Display teams
  function displayTeams() {
    team1Container.innerHTML = '';
    team2Container.innerHTML = '';
    const teams = getTeams();

    teams.forEach(team => {
      const teamDiv = document.createElement('div');
      teamDiv.classList.add('team');
      teamDiv.innerHTML = `<h2>${team.name}</h2>`;
      
      team.players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.innerHTML = `<p>${player.name} - ${player.position}</p>`;
        teamDiv.appendChild(playerDiv);
      });

      if (team.name === "Team 1") {
        team1Container.appendChild(teamDiv);
      } else {
        team2Container.appendChild(teamDiv);
      }
    });
  }

  // Event listener for assigning players to teams
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('assign-btn')) {
      const playerId = parseInt(event.target.getAttribute('data-id'));
      const teamName = event.target.getAttribute('data-team');

      // Assign the player to the team
      assignPlayerToTeam(playerId, teamName);
      displayAvailablePlayers(); // Update available players list
      displayTeams(); // Update the team displays
    }
  });

  // Initial render
  displayAvailablePlayers();
  displayTeams();
});
