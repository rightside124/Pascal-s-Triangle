document.addEventListener("DOMContentLoaded", function() {
  // Function to generate Pascal's Triangle
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

  // Function to generate and display the triangle based on user input
  function generateTriangle() {
    const numRowsInput = document.getElementById("numRows");
    const startValueInput = document.getElementById("startValue");

    const numRows = parseInt(numRowsInput.value, 10);
    const startValue = parseInt(startValueInput.value, 10);

    if (isNaN(numRows) || numRows <= 0) {
      alert("Please enter a valid positive number for rows.");
      return;
    }
    if (isNaN(startValue)) {
      alert("Please enter a valid number for the starting value.");
      return;
    }

    const triangle = generatePascalTriangle(numRows, startValue);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";  // Clear previous output

    triangle.forEach((row, rowIndex) => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("triangle-row");

      // Add spacing at the start of each row to center it
      rowDiv.style.paddingLeft = `${(numRows - rowIndex) * 0.5}em`;

      row.forEach(value => {
        const cell = document.createElement("span");
        cell.classList.add("triangle-cell");
        cell.textContent = value;
        rowDiv.appendChild(cell);
      });

      outputDiv.appendChild(rowDiv);  // Append the row to the output div
    });
  }

  // Function to randomize the starting value
  function randomizeStartValue() {
    const startValueInput = document.getElementById("startValue");
    // Generate a random start value between 1 and 10 (you can adjust the range)
    startValueInput.value = Math.floor(Math.random() * 10) + 1;
    generateTriangle(); // Regenerate the triangle with the random start value
  }

  // Toggle dropdown visibility when button is clicked
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownButton.addEventListener("click", function() {
    // Toggle visibility of dropdown content
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });

  // Event listeners for the buttons
  document.getElementById("generateButton").onclick = generateTriangle;
  document.getElementById("randomizeButton").onclick = randomizeStartValue;
});

