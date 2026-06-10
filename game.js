let distanceToHole = 350;

function playGolf() {
    const status = document.getElementById("golfStatus");
    const shot = Math.floor(Math.random() * 201) + 50; 
    distanceToHole = Math.abs(distanceToHole - shot);

    if (distanceToHole <= 10) {
        status.innerHTML = `You hit it ${shot} yards. You're within 10 yards and tapped it in! You win!`;
        distanceToHole = 350; 
    } else {
        status.innerHTML = `You hit it ${shot} yards. You are now ${distanceToHole} yards from the hole.`;
    }
}