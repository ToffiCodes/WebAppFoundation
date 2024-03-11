const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!"); // if input box empty, give alert!!!
  } else {
    let li = document.createElement("li"); // creates 'li' element
    li.innerHTML = inputBox.value; // text inside the li
    listContainer.appendChild(li); // display in list-container
    let span = document.createElement("span"); // adds span
    span.innerHTML = "\u00d7"; // it will add 1 cross icon in the span tag
    li.appendChild(span); //
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    // click function for container
    if (e.target.tagName === "LI") {
      // check if we clicked 'li'
      e.target.classList.toggle("checked"); // if checked classname is there, will be removed
      saveData(); // will save data when new added
    } else if (e.target.tagName === "SPAN") {
      // if clicked element is span
      e.target.parentElement.remove(); // it will delete parent element
      saveData(); // will save new data when deleted
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // listcontainer will be stored in the browser
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); //
}
showTask();
