
const ListDOM = document.querySelector("#list");
const taskDOM = document.getElementById("task")
const alertDOM = document.querySelector("liveToast");

function newElement() {

    let LiDOM = document.createElement("li");
    const text = document.querySelector("#task");

    if (text.value) {
        $('.success').toast('show');
        LiDOM.innerHTML = `${text.value}  <span class="close" class="ml-2 mb-1 close" onclick="deleteElement()" >&times;</span>`;
        ListDOM.append(LiDOM);
    } else {
        $('.error').toast('show')
    }

}

function listDOMHandler(event) {
    if (event.target.tagName === "SPAN") {
        deleteElement(event);
    } else if (event.target.tagName === "LI") {
        completedTask(event);
    }

}

ListDOM.addEventListener('click', listDOMHandler);


function deleteElement(event) {
    event.target.parentElement.remove();
}

function completedTask(event) {
    event.target.classList.toggle('bg-secondary')
    event.target.classList.toggle("checked")
}