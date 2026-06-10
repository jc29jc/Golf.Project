function searchPlayer() {
    const input = document.getElementById("playerSearch").value.toLowerCase().trim();
    const result = document.getElementById("searchResult");
    
    if (players[input]) {
        const p = players[input];
        result.innerHTML = `<h2>${p.name}</h2><p>Wins: ${p.wins} | Majors: ${p.majors}</p><p>${p.fact}</p>`;
    } else {
        alert("Player not found!");
    }
}

function showLeaderboard() {
    const list = document.getElementById("leaderboardList");
    list.innerHTML = ""; 

    const sorted = Object.values(players).sort((a, b) => b.wins - a.wins);

    sorted.forEach(p => {
        list.innerHTML += `<li><strong>${p.name}</strong> — ${p.wins} Wins</li>`;
    });
}

const players = {
    "jordan spieth": {
        name: "Jordan Spieth",
        wins: 13,
        majors: 3,
        fact: "Won the Masters and US open in 2015 at just 21 years old."
    },
    "tiger woods": {
        name: "Tiger Woods",
        wins: 82,
        majors: 15,
        fact: "Held all 4 major trophies at the exact same time in 2001."
    },
    "phil mickelson": {
        name: "Phil Mickelson",
        wins: 45,
        majors: 6,
        fact: "The oldest player in golf history to win a Major at age 50."
    },
    "rory mcilroy": {
        name: "Rory McIlroy",
        wins: 26,
        majors: 4,
        fact: "One of only three players to ever win four majors by the age of 25."
    },
    "brooks koepka": {
        name: "Brooks Koepka",
        wins: 9,
        majors: 5,
        fact: "Successfully won back-to-back US Opens and PGA Championships."
    }
};