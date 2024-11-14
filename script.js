function generatePascalTriangle(numRows, startValue) {
  // ... Your Pascal's triangle generation function ...
}

function generateTriangle() {
  const startValue = parseInt(document.getElementById("startValue").value);
  const minRows = parseInt(document.getElementById("minRows").value);
  const maxRows = parseInt(document.getElementById("maxRows").value);

  const triangle = generatePascalTriangle(maxRows, startValue);

  const pascalTriangleTable = document.getElementById("pascalTriangle");
  pascalTriangleTable.innerHTML = ""; // Clear the table

  for (let i = minRows - 1; i < maxRows; i++) {
    const row = triangle[i];
    const tableRow = document.createElement("tr");
    for (let j = 0; j <= i; j++) {
      const cell = document.createElement("td");
      cell.textContent = row[j];
      tableRow.appendChild(cell);
    }
    pascalTriangleTable.appendChild(tableRow);
  }
}
