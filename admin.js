// Skull Blaze Admin Panel

let players = JSON.parse(localStorage.getItem("players")) || [];

const table = document.getElementById("playerTable");

function savePlayers() {
    localStorage.setItem("players", JSON.stringify(players));
}

function renderPlayers() {

    table.innerHTML = "";

    players.sort((a,b)=>b.points-a.points);

    players.forEach((player,index)=>{

        table.innerHTML += `
        <tr>
            <td>${player.name}</td>
            <td>${player.points}</td>

            <td>
                <button onclick="editPlayer(${index})">
                    Edit
                </button>

                <button class="delete"
                    onclick="deletePlayer(${index})">
                    Delete
                </button>
            </td>

        </tr>
        `;

    });

}

function addPlayer(){

    const name=document.getElementById("name").value;
    const points=Number(document.getElementById("points").value);
    const kills=Number(document.getElementById("kills").value);
    const assists=Number(document.getElementById("assists").value);
    const events=Number(document.getElementById("events").value);
    const payroll=Number(document.getElementById("payroll").value);

    if(name==""){
        alert("Player Name Required");
        return;
    }

    players.push({

        name,
        points,
        kills,
        assists,
        events,
        payroll

    });

    savePlayers();

    renderPlayers();

    document.querySelectorAll("input").forEach(i=>i.value="");

}

function deletePlayer(index){

    if(confirm("Delete this player?")){

        players.splice(index,1);

        savePlayers();

        renderPlayers();

    }

}

function editPlayer(index){

    const p=players[index];

    document.getElementById("name").value=p.name;
    document.getElementById("points").value=p.points;
    document.getElementById("kills").value=p.kills;
    document.getElementById("assists").value=p.assists;
    document.getElementById("events").value=p.events;
    document.getElementById("payroll").value=p.payroll;

    players.splice(index,1);

    savePlayers();

    renderPlayers();

}

function exportJSON(){

    const data=JSON.stringify(players,null,2);

    const blob=new Blob([data],{type:"application/json"});

    const url=URL.createObjectURL(blob);

    const a=document.createElement("a");

    a.href=url;

    a.download="players.json";

    a.click();

}

renderPlayers();
