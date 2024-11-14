function generatePascalTriangle(numRows, startValue = 1) {
  // ... Your Pascal's triangle generation function from before ...
}

// Get the table element
const pascalTriangleTable = document.getElementById('pascal-triangle');

// Get the desired number of rows and start value (you can customize this)
const numRows = 5;
const startValue = 2;

// Generate the Pascal's triangle
const triangle = generatePascalTriangle(numRows, startValue);

// Create table rows and cells
triangle.forEach(row => {
  const tableRow = document.createElement('tr');
  row.forEach(value => {
    const tableCell = document.createElement('td');
    tableCell.textContent = value;
    tableRow.appendChild(tableCell);
  });
  pascalTriangleTable.appendChild(tableRow);
});
