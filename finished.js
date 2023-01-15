const username = document.getElementById("username");
const keepScoreBtn = document.getElementById("keepScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    keepScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
};