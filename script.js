function generatePascalTriangle(numRows, startValue) {
  const triangle = [[startValue]];

  for (let i = 1; i < numRows; i++) {
    const row = [startValue];

    for (let j = 1; j <= i - 1; j++) {
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }

    row.push(startValue);
    triangle.push(row);
  }

  return triangle;
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
