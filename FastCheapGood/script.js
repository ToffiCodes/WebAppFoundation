const fastCheckbox = document.getElementById("fast");
const cheapCheckbox = document.getElementById("cheap");
const goodCheckbox = document.getElementById("good");

fastCheckbox.addEventListener("change", function () {
  if (this.checked) {
    cheapCheckbox.checked = false;
    goodCheckbox.checked = false;
  }
});

cheapCheckbox.addEventListener("change", function () {
  if (this.checked) {
    fastCheckbox.checked = false;
    goodCheckbox.checked = false;
  }
});

goodCheckbox.addEventListener("change", function () {
  if (this.checked) {
    fastCheckbox.checked = false;
    cheapCheckbox.checked = false;
  }
});
