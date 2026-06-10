function calculateAverageHandicap() {
    const rating = parseFloat(document.getElementById("courseRating").value);
    const slope = parseFloat(document.getElementById("slopeRating").value);

    if (!rating || !slope) {
        alert("Please enter a Course Rating and Slope Rating!");
        return;
    }

    let totalDifferential = 0;
    let scoresCount = 5;

    for (let i = 1; i <= scoresCount; i++) {
        const scoreValue = parseFloat(document.getElementById("score" + i).value);

        if (!scoreValue) {
            alert("Please fill out all of the scores!");
            return;
        }

        let roundDiff = (scoreValue - rating) * 113 / slope;
        totalDifferential += roundDiff;
    }

    let averageHandicap = totalDifferential / scoresCount;

    document.getElementById("differentialValue").innerText = averageHandicap.toFixed(1);
    document.getElementById("handicapResult").style.display = "block";
}