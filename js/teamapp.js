import { loadPlayers, getAvailablePlayers, assignPlayerToTeam, getTeams } from './team.js';

document.addEventListener('DOMContentLoaded', () => {
  const availablePlayersContainer = document.getElementById('available-players');
  const team1Container = document.getElementById('Rangers');
  const team2Container = document.getElementById('Devils');
  const team3Container = document.getElementById('Islanders');
  const team4Container = document.getElementById('Sabres');

  await loadPlayers();

  // Display available players
  function displayAvailablePlayers() {
    availablePlayersContainer.innerHTML = ''; // Clear existing players
    const availablePlayers = getAvailablePlayers();
    if (!availablePlayers || availablePlayers.length === 0) {
      availablePlayersContainer.innerHTML = `<p>No available players at the moment.</p>`;
      return;
    }

    availablePlayers.forEach(player => {
      const playerDiv = document.createElement('div');
      playerDiv.classList.add('player');
      playerDiv.innerHTML = `
        <p>${player.name} - ${player.position}</p>
        <button class="assign-btn" data-id="${player.id}" data-team="Rangers">Assign to Rangers</button>
        <button class="assign-btn" data-id="${player.id}" data-team="Devils">Assign to Devils</button>
        <button class="assign-btn" data-id="${player.id}" data-team="Islanders">Assign to Islanders</button>
        <button class="assign-btn" data-id="${player.id}" data-team="Sabres">Assign to Sabres</button>
      `;
      availablePlayersContainer.appendChild(playerDiv);
    });
  }

  // Display teams
  function displayTeams() {
    team1Container.innerHTML = '';
    team2Container.innerHTML = '';
    team3Container.innerHTML = '';
    team4Container.innerHTML = '';
    const teams = getTeams();

    tteams.forEach(team => {
      const teamContainer = {
        "Rangers": team1Container,
        "Devils": team2Container,
        "Islanders": team3Container,
        "Sabres": team4Container
      }[team.name];

      if (!teamContainer) return; // Skip invalid teams

      const teamDiv = document.createElement('div');
      teamDiv.classList.add('team');
      teamDiv.innerHTML = `<h2>${team.name}</h2>`;
      
      team.players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.innerHTML = `<p>${player.name} - ${player.position}</p>`;
        teamDiv.appendChild(playerDiv);
      });

      teamContainer.appendChild(teamDiv);
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
