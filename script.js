const responses = [];

function updateTable(){

const table = document.getElementById("responseTable");

document.getElementById("totalResponses").textContent = responses.length;

if(responses.length===0){

table.innerHTML = `
<tr>
<td colspan="4">No responses yet.</td>
</tr>
`;

return;

}

table.innerHTML="";

responses.forEach(response=>{

table.innerHTML += `
<tr>
<td>${response.name}</td>
<td>${response.email}</td>
<td>${response.version}</td>
<td>${response.date}</td>
</tr>
`;

});

}

document.getElementById("search").addEventListener("input",function(){

const search = this.value.toLowerCase();

const rows = document.querySelectorAll("#responseTable tr");

rows.forEach(row=>{

row.style.display =
row.textContent.toLowerCase().includes(search)
? ""
: "none";

});

});

updateTable();
