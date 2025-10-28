document.getElementById("visualizeBtn").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const output = document.getElementById("output");
  
  try {
    const jsonData = JSON.parse(input);
    output.innerHTML = generateTree(jsonData);
  } catch (e) {
    output.innerHTML = "<p style='color:red;'>Invalid JSON. Please check your input.</p>";
  }
});

function generateTree(obj) {
  if (typeof obj !== "object" || obj === null) {
    return `<span>${obj}</span>`;
  }

  let html = "<ul>";
  for (let key in obj) {
    html += `<li><strong>${key}:</strong> ${generateTree(obj[key])}</li>`;
  }
  html += "</ul>";
  return html;
}
