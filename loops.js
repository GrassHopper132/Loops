





// Loops lab
// feeling loopy

console.log("Feeling Loopy");

let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rows = csvString.split('\n');

let i = 0;
while (i < rows.length) {
  
    let cells = rows[i].split(',');
  let cell1, cell2, cell3, cell4;
  
  for (let j = 0; j < cells.length; j++) {
    if (j === 0) cell1 = cells[j];
    if (j === 1) cell2 = cells[j];
    if (j === 2) cell3 = cells[j];
    if (j === 3) cell4 = cells[j];
  }
  console.log(cell1, cell2, cell3, cell4); 
  i++;
}
