function searchContent() {
  const query = document.getElementById('searchBar').value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert("Please enter something to search.");
  }
}

function startTutorial(topic) {
  alert(`Redirecting to the ${topic} tutorial...`);
}

function viewProject() {
  alert("Opening project details...");
}

function tryOnline() {
  alert("Launching interactive code editor...");
}
