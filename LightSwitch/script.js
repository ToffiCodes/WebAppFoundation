const toggleButton = document.getElementById("toggleButton");
const container = document.getElementById("container");
const body = document.body;

toggleButton.addEventListener("click", function () {
  if (container.classList.contains("night")) {
    container.classList.remove("night");
    body.style.backgroundColor = "white"; // Light background
    document.title = "Good Morning";
  } else {
    container.classList.add("night");
    body.style.backgroundColor = "black"; // Dark background
    document.title = "Good Night";
  }
});
