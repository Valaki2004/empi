var emps = 
[
    {
        id: 1 ,
        name:"Erős István",
        city:"Szeged"
    },
    {
        id: 2 ,
        name:"Pala Irén",
        city:"Hatvan"
    }
]

console.log(emps[0].name)

const tbody = document.querySelector("#tbody");
var rows = ``;
emps.forEach((emp) => {
    var row = `
    <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.city}</td>
    </tr>
    `;
    rows = rows + row;
});
tbody.innerHTML = rows;

var empsStr = JSON.stringify(emps)
console.log(empsStr)
var vissza = JSON.parse(empsStr)
console.log(vissza)
