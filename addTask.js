const addButton = document.getElementById("addButton");
const clear = document.getElementById("clear");
const mainTasks = document.getElementById("mainTasks");
const inputText = document.getElementById("inputText");
// Create a text node with a space
const spaceTextNode = document.createTextNode(" ");

// To load the stored changes in localStorage API in the browser
window.addEventListener("load", function () {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    // Getting the stored changed with getItem
    mainTasks.innerHTML = localStorage.getItem("tasks");
    // Clear button visibility
    clear.style.visibility = "visible";
  }
});
// Event listener for click button
addButton.addEventListener("click", function () {
  addTask();
});

// Event listener for enter button
inputText.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    addTask();
  }
});

// Even listening for clear button
clear.addEventListener("click", function () {
  // clearning the innerHTML of ul
  mainTasks.innerHTML = "";
  // hiding the clear button
  clear.style.visibility = "hidden";
  // removing the item from localStorage as well
  localStorage.removeItem("tasks");
});

// Adding the task function
function addTask() {
  // Getting the inputValue from user
  const inputValue = document.getElementById("inputText").value;
  // Creating new li line
  const newLi = document.createElement("li");
  // Checkboxes
  /* const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  // Space before checkbox
  newLi.appendChild(spaceTextNode);
  newLi.appendChild(newCheckbox); */
  // storing the value inside newLi
  newLi.textContent = inputValue;
  // Appending to ul/mainTasks
  mainTasks.appendChild(newLi);
  // Clearning the inputText field
  inputText.value = "";
  // Showing the clear button
  clear.style.visibility = "visible";
  // Storing the items in localStorage with setItem. innerHTML selects everything inside of a HTML element
  localStorage.setItem("tasks", mainTasks.innerHTML);
}
