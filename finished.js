const username = document.getElementById("username");
const keepScoreBtn = document.getElementById("keepScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    keepScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("saved");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value,
    };
    topScores.push(score);
    topScores.sort((a, b) => b.score - a.score);
    topScores.splice(5);

    localStorage.setItem('topScores', JSON.stringify(topScores));
    window.location.assign('./index.html');
};