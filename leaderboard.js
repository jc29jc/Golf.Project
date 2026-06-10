function searchPlayer() {
    const input = document.getElementById("playerSearch").value.toLowerCase().trim();
    const result = document.getElementById("searchResult");
    const p = players[input];
    
    if (p) {
        result.innerHTML = `
            <h2>${p.name}</h2>
            <p>PGA Wins: ${p.pgaWins}</p>
            <p>Majors: ${p.majors}</p>
            <p>Scoring Average: ${p.scoring}</p>
            <p>Career Earnings: ${p.earnings}</p>
            <p>${p.fact}</p>
        `;
    } else {
        alert("Player not found!");
    }
}

function showMajorHistory() {
    const major = document.getElementById("majorSelect").value;
    const resultDiv = document.getElementById("majorResult");
    
    if (!major) {
        resultDiv.innerHTML = "";
        return;
    }

    let htmlContent = "<ul>";
    majorHistory[major].forEach(y => {
        htmlContent += `<li><strong>${y.year}:</strong> ${y.top3}</li>`;
    });
    
    resultDiv.innerHTML = htmlContent + "</ul>";
}

const players = {
    "jordan spieth": {
        name: "Jordan Spieth",
        pgaWins: "13",
        majors: "3",
        scoring: "70.12",
        earnings: "$62,800,000+",
        fact: "Won the Master and US open (both majors) in 2015 at just 21 years old."
    },
    "tiger woods": {
        name: "Tiger Woods",
        pgaWins: "82 (Tied for #1 all-time)",
        majors: "15",
        scoring: "68.84 (Career Prime)",
        earnings: "$121,000,000+",
        fact: "Held all 4 major trophies at the exact same time in 2001, first to ever do that."
    },
    "phil mickelson": {
        name: "Phil Mickelson",
        pgaWins: "45",
        majors: "6",
        scoring: "69.58",
        earnings: "$96,500,000+",
        fact: "The oldest player in golf history to win a Major (2021 PGA Championship at age 50)."
    },
    "rory mcilroy": {
        name: "Rory McIlroy",
        pgaWins: "26",
        majors: "4",
        scoring: "69.25",
        earnings: "$90,100,000+",
        fact: "One of only three players to ever win four majors by the age of 25."
    },
    "brooks koepka": {
        name: "Brooks Koepka",
        pgaWins: "9",
        majors: "5",
        scoring: "69.80",
        earnings: "$43,000,000+",
        fact: "Won back-to-back US Opens and back-to-back PGA Championships in 2016."
    }
};

const majorHistory = {
    "masters": [
        { year: 2026, top3: "1st: Rory McIlroy | 2nd: Scottie Scheffler | 3rd: J. Rose, R. Henley, T. Hatton, C. Young (Tied)" },
        { year: 2025, top3: "1st: Rory McIlroy | 2nd: Justin Rose | 3rd: Patrick Reed" },
        { year: 2024, top3: "1st: Scottie Scheffler | 2nd: Ludvig Åberg | 3rd: Tommy Fleetwood" },
        { year: 2023, top3: "1st: Jon Rahm | 2nd: Phil Mickelson | 3rd: Brooks Koepka" },
        { year: 2022, top3: "1st: Scottie Scheffler | 2nd: Rory McIlroy | 3rd: Shane Lowry" },
        { year: 2021, top3: "1st: Hideki Matsuyama | 2nd: Will Zalatoris | 3rd: Jordan Spieth" },
        { year: 2020, top3: "1st: Dustin Johnson | 2nd: Cameron Smith | 3rd: Sungjae Im" },
        { year: 2019, top3: "1st: Tiger Woods | 2nd: Dustin Johnson | 3rd: Brooks Koepka" },
        { year: 2018, top3: "1st: Patrick Reed | 2nd: Rickie Fowler | 3rd: Jordan Spieth" },
        { year: 2017, top3: "1st: Sergio Garcia | 2nd: Justin Rose | 3rd: Charl Schwartzel" },
        { year: 2016, top3: "1st: Danny Willett | 2nd: Jordan Spieth | 3rd: Lee Westwood" },
        { year: 2015, top3: "1st: Jordan Spieth | 2nd: Phil Mickelson | 3rd: Justin Rose" },
        { year: 2014, top3: "1st: Bubba Watson | 2nd: Jonas Blixt | 3rd: Jordan Spieth" },
        { year: 2013, top3: "1st: Adam Scott | 2nd: Angel Cabrera | 3rd: Jason Day" },
        { year: 2012, top3: "1st: Bubba Watson | 2nd: Louis Oosthuizen | 3rd: Peter Hanson" },
        { year: 2011, top3: "1st: Charl Schwartzel | 2nd: Adam Scott | 3rd: Jason Day" },
        { year: 2010, top3: "1st: Phil Mickelson | 2nd: Lee Westwood | 3rd: Anthony Kim" },
        { year: 2009, top3: "1st: Angel Cabrera | 2nd: Kenny Perry | 3rd: Chad Campbell" },
        { year: 2008, top3: "1st: Trevor Immelman | 2nd: Tiger Woods | 3rd: Stewart Cink" },
        { year: 2007, top3: "1st: Zach Johnson | 2nd: Tiger Woods | 3rd: Retief Goosen" },
        { year: 2006, top3: "1st: Phil Mickelson | 2nd: Tim Clark | 3rd: Jose Maria Olazabal" },
        { year: 2005, top3: "1st: Tiger Woods | 2nd: Chris DiMarco | 3rd: Retief Goosen" },
        { year: 2004, top3: "1st: Phil Mickelson | 2nd: Ernie Els | 3rd: K.J. Choi" },
        { year: 2003, top3: "1st: Mike Weir | 2nd: Len Mattiace | 3rd: Phil Mickelson" },
        { year: 2002, top3: "1st: Tiger Woods | 2nd: Retief Goosen | 3rd: Phil Mickelson" },
        { year: 2001, top3: "1st: Tiger Woods | 2nd: David Duval | 3rd: Phil Mickelson" },
        { year: 2000, top3: "1st: Vijay Singh | 2nd: Ernie Els | 3rd: Loren Roberts" }
    ]
};