function calculateHandicap() {
    const score = parseFloat(document.getElementById("grossScore").value);
    const rating = parseFloat(document.getElementById("courseRating").value);
    const slope = parseFloat(document.getElementById("slopeRating").value);

    if (!score || !rating || !slope) {
        alert("Please fill out all fields!");
        return;
    }

    let result = (score - rating) * 113 / slope;
    
    document.getElementById("differentialValue").innerText = result.toFixed(1);
    document.getElementById("handicapResult").style.display = "block";
}