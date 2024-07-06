// JavaScript code for updating textbox values dynamically
function updateCounter(value) {
  document.getElementById('counter').value = value;
}

function fetchData() {
  fetch('/data')  // Fetch data from server endpoint '/data'
    .then(response => response.json())  // Convert response to JSON format
    .then(data => {
      updateCounter(data.counter);  // Update counter textbox with fetched data
      // Add more updates for additional textboxes if needed
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Fetch data initially when the page loads
window.onload = function() {
  fetchData();
  // Optionally, refresh data every few seconds (e.g., every 5 seconds)
  setInterval(fetchData, 5000);  // Refresh data every 5 seconds (5000 milliseconds)
};
