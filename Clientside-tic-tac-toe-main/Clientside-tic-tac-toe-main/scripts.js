
const gameboard = document.querySelector(".gameboard")

let playerXTurn = true;

let scoreA = 0, scoreB = 0 

const setMark = function (e) {
    if(this.innerText !== "") { return }
    if (winner ()) {return; }
    this.innerText = playerXTurn ? "X" : "O"
    if(winner()) {
        if(playerXTurn) { scoreA++; }
        else { scoreB++ }
        updateScore();
        
    }
    playerXTurn = !playerXTurn;
}

function updateScore() {
    document.querySelector("#scoreA").innerText =" Player A:" + scoreA;
    document.querySelector("#scoreB").innerText =" Player B:" + scoreB;

}

const winner = function() {
    for (let i = 0; i < 3; i++) {
        if ( //tjekker rækker
            document.querySelector(`#r${i}c0`).innerText === document.querySelector(`#r${i}c1`).innerText &&
            document.querySelector(`#r${i}c0`).innerText === document.querySelector(`#r${i}c2`).innerText &&
            document.querySelector(`#r${i}c0`).innerText !== ""
           ) {return true}

           if ( //tjekker kolonner
            document.querySelector(`#r0c${i}`).innerText === document.querySelector(`#r1c${i}`).innerText &&
            document.querySelector(`#r0c${i}`).innerText === document.querySelector(`#r2c${i}`).innerText &&
            document.querySelector(`#r0c${i}`).innerText !== ""
           ) {return true}
        }
    if( // diagonal 1
        document.querySelector(`#r0c0`).innerText === document.querySelector(`#r1c1`).innerText && 
        document.querySelector(`#r0c0`).innerText === document.querySelector(`#r2c2`).innerText &&
        document.querySelector(`#r0c0`).innerText !== ""
    ) {return true;}

    if( // diagonal 2
        document.querySelector(`#r0c2`).innerText === document.querySelector(`#r1c2`).innerText && 
        document.querySelector(`#r0c2`).innerText === document.querySelector(`#r2c2`).innerText &&
        document.querySelector(`#r0c2`).innerText !== ""
    ) {return true;}
    return false
}

for (let row = 0; row < 3; row++) {
    for  (let col = 0; col < 3; col++) {
        let btn = document.createElement("button");
        btn.id = `r${row}c${col}`
        btn.addEventListener("click", setMark)

        gameboard.appendChild(btn);
    }
}

function newGame () {
    const fields = document.querySelectorAll(".gameboard button");
    fields.forEach( f => {
        f.innerText = "";
    })
    playerXTurn = true;
}

document.querySelector("#btnNewGame").addEventListener("click", newGame)


const resetButton = document.querySelector('#btnReset');

resetButton.addEventListener('click', resetGame);


const scoreAElement = document.getElementById('scoreA');
const scoreBElement = document.getElementById('scoreB');


resetButton.addEventListener('click', resetGame);

function resetGame() {
  // Reset game state

  // Reset scores
  scoreA = 0;
  scoreB = 0;

  // Update score elements in the HTML
  scoreAElement.textContent = scoreA;
  scoreBElement.textContent = scoreB;

  // Additional logic to reset the game state
  // ...
}
