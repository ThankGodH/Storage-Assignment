let usernameInput = document.getElementById("username");
let saveButton = document.getElementById("save-btn");
let clearButton = document.getElementById("clear-btn");
let displayName = document.getElementById("display-name");

// Load saved name from localStorage when the page loads
window.onload = function () {
    const savedName = localStorage.getItem("name");
    if (savedName) {
        displayName.textContent = "Saved Name: " + savedName;
    }
};

// Save name to localStorage
saveButton.onclick = function () {
    let name = usernameInput.value;
    if (name) {
        localStorage.setItem("name", name);
        displayName.textContent = "Saved Name: " + name;
    }
};

// Clear name from localStorage
clearButton.onclick = function () {
    localStorage.removeItem("name");
    displayName.textContent = "";
    usernameInput.value = "";
};
