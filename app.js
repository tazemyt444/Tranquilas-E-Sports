// Skull Blaze Leaderboard

const players = [
    {
        name: "Leo Smacks",
        points: 24,
        kills: 2,
        assists: 1,
        events: 6
    },
    {
        name: "Kawas Blaze",
        points: 20.5,
        kills: 5,
        assists: 0,
        events: 5
    },
    {
        name: "Iconic Blaze",
        points: 20,
        kills: 1,
        assists: 2,
        events: 4
    },
    {
        name: "Shadow",
        points: 18,
        kills: 3,
        assists: 0,
        events: 3
    },
    {
        name: "Ghost",
        points: 16,
        kills: 2,
        assists: 1,
        events: 2
    }
];

// Sort by Points
players.sort((a, b) => b.points - a.points);

// Find table
const table = document.querySelector("tbody");

if (table) {

    table.innerHTML = "";

    players.forEach((player, index) => {

        table.innerHTML += `
        <tr>
            <td>#${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.points}</td>
        </tr>
        `;

    });

}

// Top Killer
const topKill = players.reduce((a,b)=>a.kills>b.kills?a:b);

// Top Assist
const topAssist = players.reduce((a,b)=>a.assists>b.assists?a:b);

// Top Event
const topEvent = players.reduce((a,b)=>a.events>b.events?a:b);

console.log("Top Killer:", topKill);
console.log("Top Assist:", topAssist);
console.log("Top Event:", topEvent);

// Greeting
const hour = new Date().getHours();

if(hour < 12){
    console.log("Good Morning Skull Blaze");
}
else if(hour < 18){
    console.log("Good Afternoon Skull Blaze");
}
else{
    console.log("Good Evening Skull Blaze");
}
fetch("players.json")
  .then(res => res.json())
  .then(players => {

    players.sort((a, b) => b.points - a.points);

    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    players.forEach((player, index) => {
      tbody.innerHTML += `
        <tr>
          <td>#${index + 1}</td>
          <td>${player.name}</td>
          <td>${player.points}</td>
        </tr>
      `;
    });

  });
