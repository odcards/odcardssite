document.addEventListener("DOMContentLoaded", async () => {
  const resultsDiv = document.getElementById("ebay-results");
  try {
    const res = await fetch("/.netlify/functions/ebay-search");
    const data = await res.json();
    resultsDiv.innerHTML = data.length
      ? data.map(item => `<p><a href="${item.url}" target="_blank">${item.title}</a> - ${item.price}</p>`).join("")
      : "<p>No listings found.</p>";
  } catch (e) {
    resultsDiv.innerHTML = "<p>Error loading eBay listings.</p>";
  }
});