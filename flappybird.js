let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

//pipes
pencil.beginPath(); // Start a new path
pencil.rect(250, 50, 100, 75); // Add a rectangle to the path

pencil.fillStyle = "green";
pencil.fill(); // Fill the rectangle

pencil.strokeStyle = "black";
pencil.lineWidth = 2;
pencil.stroke(); // Stroke the rectangle

function gameLoop() {

        pencil.clearRect(0, 0, canvas.clientWidth, canvas.height);
    



}

setInterval(gameLoop, 50);

let score = 0;

//score goes up every second
function raiseScore() {
    score += 1;
    let scoreElement = document.getElementById("scoreDisplay")
    scoreElement.innerHTML = score;
}
setInterval(raiseScore, 1000);