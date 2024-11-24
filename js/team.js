import playersData from 'data/players.json';

export const teams = [
  {name: "Rangers", players: [], maxPlayers: 23 },
  {name: "Devils", players: [], maxPlayers: 23 },
  {name: "Islanders", players: [], maxPlayers: 23 },
  {name: "Sabres", players: [], maxPlayers: 23 }
];

// get all players who are not assigned to a team
export function getAvailablePlayers() {
  return players.Data.players.filter(player => player.team === null);
}

// assign a player to a team
export function assignPlayerToTeam(playerId, teamName) {
  const player = playersData.players.find(p => p.id === playerId);
  if (player && !player.team) {
    player.team = teamName;
    const team = teams.find(t => t.name === teamName);
    if (team.players.length < team.maxPlayers) {
      team.players.push(player);
    } else {
      console.error("Team is full");
    }
  }
}

// Get all teams
export function getTeams() {
  return teams;
}
