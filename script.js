let streak = 0;

function increaseStreak() {
    streak++;
    document.getElementById("streak").innerText = streak;
}

function resetStreak() {
    streak = 0;
    document.getElementById("streak").innerText = streak;
}