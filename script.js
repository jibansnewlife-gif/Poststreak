// =====================
// STREAK SYSTEM
// =====================

let streak = 0;

// load saved streak
if (localStorage.getItem("streak")) {
    streak = parseInt(localStorage.getItem("streak"));
}

function updateText() {
    let el = document.getElementById("streak");
    if (el) {
        el.innerText = streak;
    }
}

updateText();

function increaseStreak() {
    streak++;
    saveStreak();
}

function resetStreak() {
    streak = 0;
    saveStreak();
}

function saveStreak() {
    localStorage.setItem("streak", streak);
    updateText();
}



// =====================
// FLOATING BALL BACKGROUND
// =====================

let balls = [];

function createBall(size) {

    let ball = document.createElement("div");
    ball.classList.add("ball");

    ball.size = size;

    ball.x = Math.random() * window.innerWidth;
    ball.y = Math.random() * window.innerHeight;

    // slow speed
    ball.vx = (Math.random() - 0.5) * 0.6;
    ball.vy = (Math.random() - 0.5) * 0.6;

    ball.style.width = size + "px";
    ball.style.height = size + "px";

    document.getElementById("bg").appendChild(ball);

    balls.push(ball);
}



function updateBalls() {

    balls.forEach(ball => {

        // smooth direction change
        ball.vx += (Math.random() - 0.5) * 0.02;
        ball.vy += (Math.random() - 0.5) * 0.02;

        ball.x += ball.vx;
        ball.y += ball.vy;

        // wrap around screen (snake style)

        if (ball.x > window.innerWidth) ball.x = -ball.size;
        if (ball.x < -ball.size) ball.x = window.innerWidth;

        if (ball.y > window.innerHeight) ball.y = -ball.size;
        if (ball.y < -ball.size) ball.y = window.innerHeight;

        ball.style.left = ball.x + "px";
        ball.style.top = ball.y + "px";

    });

    requestAnimationFrame(updateBalls);
}



// =====================
// CREATE BIG BALLS
// =====================

window.onload = function () {

    createBall(850);
    createBall(500);
    createBall(680);

    updateBalls();
};