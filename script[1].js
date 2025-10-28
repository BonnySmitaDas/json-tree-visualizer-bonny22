document.getElementById('visualizeBtn').addEventListener('click', () => {
  const jsonText = document.getElementById('jsonInput').value;
  try {
    const jsonObj = JSON.parse(jsonText);
    const container = document.getElementById('treeContainer');
    container.innerHTML = '';
    container.appendChild(createTree(jsonObj));
  } catch (error) {
    alert('Invalid JSON! Please check your input.');
  }
});

function createTree(obj) {
  const ul = document.createElement('ul');
  for (const key in obj) {
    const li = document.createElement('li');
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      li.textContent = key + ':';
      li.appendChild(createTree(obj[key]));
    } else {
      li.textContent = key + ': ' + obj[key];
    }
    ul.appendChild(li);
  }
  ul.classList.add('node');
  return ul;
}