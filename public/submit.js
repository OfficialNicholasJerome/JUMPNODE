function sendData() {
  const email = document.getElementById("eaddress").value;
  fetch("/storeEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
  .then(response => {
    if (response.ok) {
      console.log("Email stored successfully!");
    } else {
      console.log("Failed to store email!");
    }
  })
  .catch(error => console.error(error));
}