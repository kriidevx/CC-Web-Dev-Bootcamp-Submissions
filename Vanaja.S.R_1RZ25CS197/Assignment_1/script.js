
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Task text
    let span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // When checkbox is clicked
    checkbox.onchange = function () {
        span.classList.toggle("completed");
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function () {
        li.remove();
    };

    // Append all elements
    li.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
window.onload = function () {
    document.getElementById("addBtn").addEventListener("click", addTask);
};