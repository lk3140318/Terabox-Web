document.getElementById("terabox-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const linkInput = document.getElementById("terabox-link").value;

  if (!linkInput) {
    alert("Please enter a valid TeraBox link.");
    return;
  }

  // API कॉल बैकएंड के लिए
  try {
    const response = await fetch("/api/generate-direct-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link: linkInput }),
    });

    const data = await response.json();

    if (data.success) {
      document.getElementById("download-link").textContent =
        `Direct Link: ${data.directLink}`;
    } else {
      alert("Failed to generate the direct link.");
    }
  } catch (err) {
    alert("An error occurred. Please try again later.");
  }
});
