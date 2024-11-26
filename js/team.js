// Fetch JSON file hosted on GitHub Pages
fetch('./data/players.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Process your JSON data here
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });

// Default empty structure
let playersData = { players: [] }; 

export async function loadPlayers() {
  try {
    const response = await fetch('./data/players.json'); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    playersData = await response.json(); 
    console.log('Players loaded:', playersData);
  } catch (error) {
    console.error('Error fetching the JSON file:', error);
  }
}

export const teams = [
  {name: "Rangers", players: [], maxPlayers: 23 },
  {name: "Devils", players: [], maxPlayers: 23 },
  {name: "Islanders", players: [], maxPlayers: 23 },
  {name: "Sabres", players: [], maxPlayers: 23 }
];

// get all players who are not assigned to a team
export function getAvailablePlayers() {
  return players.Data.players.filter(player => !player.team);
}

// assign a player to a team
export function assignPlayerToTeam(playerId, teamName) {
  const player = playersData.players.find(p => p.id === playerId);
  const team = teams.find(t => t.name === teamName);
  
  if (player && !player.team) {
      if (team && team.players.length < team.maxPlayers) {
        player.team = teamName;
        team.players.push(player);
  } else {
    console.error('Team is full or does not exist.');
    }
  } else {
    console.error('Player not found or already assigned.');
  }
}

// Get all teams
// Get all teams
export function getTeams() {
  return teams; // Correctly return the `teams` array
}
