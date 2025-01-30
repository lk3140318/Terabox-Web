document.getElementById("terabox-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const linkInput = document.getElementById("terabox-link").value;

  if (!linkInput) {
    alert("Please enter a valid TeraBox link.");
    return;
  }

