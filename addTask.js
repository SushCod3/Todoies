const addButton = document.getElementById("addButton");
const clear = document.getElementById("clear");
const mainTasks = document.getElementById("mainTasks");
const inputText = document.getElementById("inputText");
const card = document.getElementById("card");
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

// Function to clear individual task
function clearIndividual(event) {
  // finds the closest event the .card
  const taskToRemove = event.target.closest(".card");
  if (taskToRemove) {
    taskToRemove.remove();
    // Update localStorage after removing the task
    localStorage.setItem("tasks", mainTasks.innerHTML);
  }
}
// Event delegation for clearing individual tasks
mainTasks.addEventListener("click", function(event) {
  if (event.target.classList.contains("btn-danger")) {
    clearIndividual(event);
  }
});

function addTask() {
  // Getting the inputValue from user
  const inputValue = document.getElementById("inputText").value;

  // Creating a new card element
  const newCard = document.createElement("div");
  newCard.classList.add("card", "mb-3");

  // Card body
  const cardBody = document.createElement("div");
  // combine the text and button together
  cardBody.classList.add("card-body", "d-flex", "justify-content-between", "align-items-center");

  // Title
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = inputValue;

  // Text-end div
  const textEndDiv = document.createElement("div");
  textEndDiv.classList.add("text-end");

  // Clear button
  const clearBtn = document.createElement("a");
  clearBtn.href = "#";
  clearBtn.classList.add("btn", "btn-danger", "btn-sm", "text-end");
  clearBtn.textContent = "Clear";

  // Constructing the card structure
  textEndDiv.appendChild(clearBtn);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(textEndDiv);
  newCard.appendChild(cardBody);

  // Appending the new card to the container
  mainTasks.appendChild(newCard);

  // Clearing the inputText field
  inputText.value = "";
  // Showing the clear button
  clear.style.visibility = "visible";
  // Storing the items in localStorage with setItem. innerHTML selects everything inside of an HTML element
  localStorage.setItem("tasks", mainTasks.innerHTML);
}

