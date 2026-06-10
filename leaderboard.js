function searchPlayer() {
    const input = document.getElementById("playerSearch").value.toLowerCase().trim();
    const result = document.getElementById("searchResult");
    
    if (players[input]) {
        const p = players[input];
        result.innerHTML = `
            <h2>${p.name}</h2>
            <p>PGA Wins: ${p.pgaWins}</p>
            <p>Majors: ${p.majors}</p>
            <p>Scoring Average: ${p.scoring}</p>
            <p>Career Earnings: ${p.earnings}</p>
            <p>${p.fact}</p>
            <div>${p.media}</div>
        `;
    } else {
        alert("Player not found!");
    }
}

const players = {
    "jordan spieth": {
        name: "Jordan Spieth",
        pgaWins: "13",
        majors: "3",
        scoring: "70.12",
        earnings: "$62,800,000+",
        fact: "Won the Master and US open (both majors) in 2015 at just 21 years old.",
        media: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/n_03pDAnv20" frameborder="0" allowfullscreen></iframe>'
    },
    "tiger woods": {
        name: "Tiger Woods",
        pgaWins: "82 (Tied for #1 all-time)",
        majors: "15",
        scoring: "68.84 (Career Prime)",
        earnings: "$121,000,000+",
        fact: "Held all 4 major trophies at the exact same time in 2001, known as the 'Tiger Slam'.",
        media: '<iframe width="100%" height="315" src="https://www.youtube.com/watch?v=pq-L5SqXn24" frameborder="0" allowfullscreen></iframe>'
    },
    "phil mickelson": {
        name: "Phil Mickelson",
        pgaWins: "45",
        majors: "6",
        scoring: "69.58",
        earnings: "$96,500,000+",
        fact: "The oldest player in golf history to win a Major (2021 PGA Championship at age 50).",
        media: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/9wJ_m_gG6lA" frameborder="0" allowfullscreen></iframe>'
    },
    "rory mcilroy": {
        name: "Rory McIlroy",
        pgaWins: "26",
        majors: "4",
        scoring: "69.25",
        earnings: "$90,100,000+",
        fact: "One of only three players to ever win four majors by the age of 25.",
        media: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/uCymP4uKzM0" frameborder="0" allowfullscreen></iframe>'
    },
    "brooks koepka": {
        name: "Brooks Koepka",
        pgaWins: "9",
        majors: "5",
        scoring: "69.80",
        earnings: "$43,000,000+",
        fact: "Successfully won back-to-back US Opens and back-to-back PGA Championships.",
        media: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/8I0f0z-vE4k" frameborder="0" allowfullscreen></iframe>'
    }
};