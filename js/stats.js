// Stats disply and management
document.addEventListener("DOMContentLoaded", () => {
  const stats = JSON.parse(localStorage.getItem("stats")) || [];
  const statsContainer = document.getElementById("stats-container");

  statsContainer.innerHTML = stats
    .map(stat => `<p>${stat.name} - Goals: ${stat.goals}, Assists: ${stat.assists}</p>`)
    .join("");
});
