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

function showMastersYear() {
    const year = document.getElementById("yearSelect").value;
    const resultDiv = document.getElementById("yearResult");
    
    if (year && mastersHistory[year]) {
        resultDiv.innerHTML = `<p>${mastersHistory[year]}</p>`;
    } else {
        resultDiv.innerHTML = "";
    }
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
        fact: "Held all 4 major trophies at the exact same time in 2001, known as the 'Tiger Slam'."
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
        fact: "Successfully won back-to-back US Opens and back-to-back PGA Championships."
    }
};

const mastersHistory = {
    "2026": "1st: Rory McIlroy | 2nd: Scottie Scheffler | 3rd: J. Rose, R. Henley, T. Hatton, C. Young (Tied)",
    "2025": "1st: Rory McIlroy | 2nd: Justin Rose | 3rd: Patrick Reed",
    "2024": "1st: Scottie Scheffler | 2nd: Ludvig Åberg | 3rd: Tommy Fleetwood",
    "2023": "1st: Jon Rahm | 2nd: Phil Mickelson | 3rd: Brooks Koepka",
    "2022": "1st: Scottie Scheffler | 2nd: Rory McIlroy | 3rd: Shane Lowry",
    "2021": "1st: Hideki Matsuyama | 2nd: Will Zalatoris | 3rd: Jordan Spieth",
    "2020": "1st: Dustin Johnson | 2nd: Cameron Smith | 3rd: Sungjae Im",
    "2019": "1st: Tiger Woods | 2nd: Dustin Johnson | 3rd: Brooks Koepka",
    "2018": "1st: Patrick Reed | 2nd: Rickie Fowler | 3rd: Jordan Spieth",
    "2017": "1st: Sergio Garcia | 2nd: Justin Rose | 3rd: Charl Schwartzel",
    "2016": "1st: Danny Willett | 2nd: Jordan Spieth | 3rd: Lee Westwood",
    "2015": "1st: Jordan Spieth | 2nd: Phil Mickelson | 3rd: Justin Rose",
    "2014": "1st: Bubba Watson | 2nd: Jonas Blixt | 3rd: Jordan Spieth",
    "2013": "1st: Adam Scott | 2nd: Angel Cabrera | 3rd: Jason Day",
    "2012": "1st: Bubba Watson | 2nd: Louis Oosthuizen | 3rd: Peter Hanson",
    "2011": "1st: Charl Schwartzel | 2nd: Adam Scott | 3rd: Jason Day",
    "2010": "1st: Phil Mickelson | 2nd: Lee Westwood | 3rd: Anthony Kim",
    "2009": "1st: Angel Cabrera | 2nd: Kenny Perry | 3rd: Chad Campbell",
    "2008": "1st: Trevor Immelman | 2nd: Tiger Woods | 3rd: Stewart Cink",
    "2007": "1st: Zach Johnson | 2nd: Tiger Woods | 3rd: Retief Goosen",
    "2006": "1st: Phil Mickelson | 2nd: Tim Clark | 3rd: Jose Maria Olazabal",
    "2005": "1st: Tiger Woods | 2nd: Chris DiMarco | 3rd: Retief Goosen",
    "2004": "1st: Phil Mickelson | 2nd: Ernie Els | 3rd: K.J. Choi",
    "2003": "1st: Mike Weir | 2nd: Len Mattiace | 3rd: Phil Mickelson",
    "2002": "1st: Tiger Woods | 2nd: Retief Goosen | 3rd: Phil Mickelson",
    "2001": "1st: Tiger Woods | 2nd: David Duval | 3rd: Phil Mickelson",
    "2000": "1st: Vijay Singh | 2nd: Ernie Els | 3rd: Loren Roberts"
};