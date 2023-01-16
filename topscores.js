const topScoresList = document.getElementById("topScoresList");
const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

topScoresList.innerHTML = topScores
    .map(score => {
        return`<li class"top-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
  