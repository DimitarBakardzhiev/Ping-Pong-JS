window.onload = function () {
    var canvas = document.getElementById('the-canvas');
    var ctx = canvas.getContext('2d');

    var mouseY;
    canvas.addEventListener('mousemove', function (event) {
        mouseY = event.clientY;
        ctx.clearRect(0, 0, 5, 500);
        ctx.clearRect(695, 0, 700, 500);
        ctx.beginPath();
        ctx.rect(2, mouseY - 50, 3, 100);
        ctx.fillStyle = 'yellowgreen';
        ctx.fill();

        ctx.beginPath();
        ctx.rect(695, mouseY - 50, 3, 100);
        ctx.fillStyle = 'yellowgreen';
        ctx.fill();
        ctx.closePath();
    });

    var ballX = 350,
        ballY = 250,
        changeX = 3,
        changeY = 0,
        score = 0,
        highScore = 0;
        scoreBoard = document.getElementById('score');
        scoreBoard.innerHTML = 'Score: ' + score + '<br>High Score: ' + highScore;
    function frame() {
        // physics
        if ((ballX >= 690 || ballX <= 5) && (ballY >= mouseY - 50 && ballY <= mouseY + 50)) { 
            changeX *= -1;
            score++;
            if (score > highScore) {
                highScore = score;
            }
            scoreBoard.innerHTML = 'Score: ' + score + '<br>High Score: ' + highScore;
            if (changeX > 0) {
                changeX += 0.5;
            } else {
                changeX -= 0.5;
            }
            if (ballY >= mouseY - 50 && ballY <= mouseY - 40) {         
                changeY = -2;
            } else if (ballY >= mouseY + 40 && ballY <= mouseY + 50) { 
                changeY = 2;
            } else if (ballY >= mouseY - 40 && ballY <= mouseY - 30) {
                changeY = -1.8;
            } else if (ballY >= mouseY + 30 && ballY <= mouseY + 40) {
                changeY = 1.8;
            } else if (ballY >= mouseY - 30 && ballY <= mouseY - 20) {
                changeY = -1.6;
            } else if (ballY >= mouseY + 20 && ballY <= mouseY + 30) {
                changeY = 1.6;
            } else if (ballY >= mouseY - 20 && ballY <= mouseY - 10) {
                changeY = -1.3;
            } else if (ballY >= mouseY + 10 && ballY <= mouseY + 20) {
                changeY = 1.3;
            } else if (ballY >= mouseY - 10 && ballY <= mouseY - 5) {
                changeY = -1.2;
            } else if (ballY >= mouseY + 5 && ballY <= mouseY + 10) {
                changeY = 1.2;
            } else if (ballY >= mouseY - 5 && ballY <= mouseY - 3) {
                changeY = -1.1;
            } else if (ballY >= mouseY + 3 && ballY <= mouseY + 5) {
                changeY = 1.1;
            }
            else {
                changeY = 0;
            }
        }
        if (ballY <= 3 || ballY >= 500 - 3) {
            changeY *= -1;
        }
        // move ball
        ctx.clearRect(5, 0, 690, 700);
        ctx.beginPath();
        ctx.arc(ballX, ballY, 3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ballX += changeX;
        ballY += changeY;
        if (ballX > 700 + score || ballX < 0 - score) {
            return;
        }
        requestAnimationFrame(frame);
    }
    frame();

    document.getElementById('new-game').addEventListener('click', function () {
        newGame();
    });
    function newGame() {
        ballX = 350;
        ballY = 250;
        changeX = 3;
        changeY = 0;
        score = 0;
        scoreBoard.innerHTML = 'Score: ' + score + '<br>High Score: ' + highScore;
        frame();
    }
}