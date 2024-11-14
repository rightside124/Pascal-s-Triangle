// Generates Pascal's Triangle given the number of rows and starting value
function generatePascalTriangle(numRows, startValue) {
  const triangle = [[startValue]];  // Initialize with the first row containing the start value
  for (let i = 1; i < numRows; i++) {
    const row = [startValue];
    for (let j = 1; j <= i - 1; j++) {
      // Each element is the sum of the two elements above it
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    row.push(startValue);  // Append the start value to the end of each row
    triangle.push(row);  // Add the row to the triangle
  }
  return triangle;
}

// Function to generate the triangle and display it on the webpage
function generateTriangle() {
  // Get the values from user inputs
  const numRowsInput = document.getElementById("numRows");
  const startValueInput = document.getElementById("startValue");
  
  const numRows = parseInt(numRowsInput.value, 10);
  const startValue = parseInt(startValueInput.value, 10);
  
  // Validate the inputs
  if (isNaN(numRows) || numRows <= 0) {
    alert("Please enter a valid positive number for rows.");
    return;
  }
  if (isNaN(startValue)) {
    alert("Please enter a valid number for the starting value.");
    return;
  }

  // Generate the Pascal's Triangle
  const triangle = generatePascalTriangle(numRows, startValue);

  // Display the triangle on the webpage
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";  // Clear previous output

  // Format and display each row
  triangle.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.textContent = row.join(" ");  // Join row elements with spaces
    outputDiv.appendChild(rowDiv);  // Append each row to the output div
  });
}

// Attach the generateTriangle function to the button's click event
document.getElementById("generateButton").onclick = generateTriangle;
