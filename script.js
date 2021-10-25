var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liTags = document.getElementsByTagName("li"); // gather all tasks into a list

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    addDelBut(li); // adding button to new task
    ul.appendChild(li);
    input.value = "";
    li.addEventListener("click", toggleDone); // adding eventListener for addDoneClass to new task
}

function addListAfterClick() {
    if (inputLength()) {
        createListElement();
    };
}

function addListAfterKeypress(event) {
    if (inputLength() && event.keyCode === 13) {
        createListElement();
    };
}

// below are functions to add eventListener for addDoneClass
// and Delete Button to the existing tasks
function addDoneAndDelBut() {
    for (var i = 0; i < liTags.length; i++) {
        var elementLi = liTags[i];
        elementLi.addEventListener("click", toggleDone);
        addDelBut(elementLi); // adding deelte button to each existing tasks
    };
}

function toggleDone() {
    this.classList.toggle("done"); 
}
// ==========

// below is function to add delete button to each task element
function addDelBut(li) {
    var delBut = document.createElement("button");
    delBut.setAttribute("id", "delBut"); // adding ID to del button, easier to work with
    delBut.setAttribute("style", "margin: 0px 10px") // make it easier to see
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", deleteTaskAfterClick); // add event on-click to the created delete button
    li.appendChild(delBut);
}
// ==========

// below is function to delete task when click on delete button
function deleteTaskAfterClick() {
    this.parentElement.remove();
}
// ==========

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
addDoneAndDelBut();