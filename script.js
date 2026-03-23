let streak = 0;

// load saved streak when page opens
if (localStorage.getItem("streak")) {
    streak = parseInt(localStorage.getItem("streak"));
}

document.getElementById("streak").innerText = streak;

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
    document.getElementById("streak").innerText = streak;
}