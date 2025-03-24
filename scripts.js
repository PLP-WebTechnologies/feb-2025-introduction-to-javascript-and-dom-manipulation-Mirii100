// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("text").textContent = "Text has been changed!";
});

// Toggle CSS styles dynamically
document.getElementById("toggleStyleBtn").addEventListener("click", function () {
    let styledText = document.getElementById("styledText");
    styledText.style.color = styledText.style.color === "red" ? "black" : "red";
    styledText.style.fontSize = styledText.style.fontSize === "20px" ? "16px" : "20px";
});

// Add and remove elements dynamically
document.getElementById("addElementBtn").addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("itemList").appendChild(newItem);
});

document.getElementById("removeElementBtn").addEventListener("click", function () {
    let list = document.getElementById("itemList");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});
