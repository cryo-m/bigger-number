let playerName = prompt("Введіть ім'я")
const playerNameLabel = document.getElementById('playerName');
if(playerName !== null && playerName !== ''){
    playerNameLabel.textContent = playerName;
}
else {
    playerName = "Гравець";
}

function generateNumbers() {
    const resultTitle = document.querySelector('.result-title');
    const playerCard = document.querySelector('.card.player');
    const botCard = document.querySelector('.card.bot');
    const playerScoreLabel = document.getElementById("player-score");
    const botScoreLabel = document.getElementById("bot-score");


    let playerScore = Math.floor(Math.random() * 10);
    let botScore = Math.floor(Math.random() * 10);
    
    playerScoreLabel.textContent = playerScore;
    botScoreLabel.textContent = botScore;
    
    if (playerScore > botScore){
        resultTitle.textContent = `${playerName} перемагає!`;
        playerCard.style.borderColor = '#2ea043'; 
        playerCard.style.boxShadow = '0 8px 25px rgba(46, 160, 67, 0.4)';
        botCard.style.borderColor = '#f85149';
        botCard.style.boxShadow = '0 8px 25px rgba(248, 81, 73, 0.4)';
    }
    else if (playerScore < botScore){
        resultTitle.textContent = "Перемога комп'ютера!";
        playerCard.style.borderColor = '#f85149'; 
        playerCard.style.boxShadow = '0 8px 25px rgba(248, 81, 73, 0.4)';
        botCard.style.borderColor = '#2ea043';
        botCard.style.boxShadow = '0 8px 25px rgba(46, 160, 67, 0.4)';
    }
    else {
        resultTitle.textContent = "Нічия!";
        playerCard.style.borderColor = ''; 
        botCard.style.borderColor = '';
        playerCard.style.boxShadow = '';
        botCard.style.boxShadow = '';
    }
}